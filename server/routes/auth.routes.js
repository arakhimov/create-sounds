const express = require("express");
const { check, validationResult } = require("express-validator");
const bcript = require("bcryptjs");
const User = require("../models/User");
const getUserAdditionFields = require("../utils/getUserAdditionFields");
const tokenService = require("../services/token.service");
const router = express.Router({ mergeParams: true });
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
const isInvalidToken = require("../utils/isInvalidToken");

// 1. get req data (email, passworw)
// 2. check if email already exist
// 3. hash password
// 4. create user
// 5. generate tokens
router.post("/signUp", [
  check("email", "Email введен некорректно").isEmail(),
  check("password", "Минимальная длина пароля 8 символов").isLength({ min: 8 }),
  check(
    "password",
    "Пароль должен содержать хотя бы одну цифру, строчную и заглавную буквы"
  ).matches(passwordRegExp),
  async (req, res) => {
    try {
      // проверка наличия ошибок
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            errors
          }
        });
      }

      // получение данных
      const { email, password } = req.body;

      // проверка существует ли уже пользователь с таким email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          error: {
            message: "EMAIL_EXIST",
            code: 400
          }
        });
      }

      // шифрование пароля
      const hashedPassword = await bcript.hash(password, 12);

      // создание нового пользователя
      const newUser = await User.create({
        ...getUserAdditionFields(),
        ...req.body,
        password: hashedPassword
      });

      // генерация tokens
      const tokens = tokenService.generate({ _id: newUser._id });

      // сохранение tokens и создание user
      await tokenService.save(newUser._id, tokens.refreshToken);

      res.status(200).send({ user: newUser._id, ...tokens });
    } catch (error) {
      res
        .status(500)
        .json({ message: "На сервере произошла ошибка. Попробуйте позднее." });
    }
  }
]);

// 1. validate
// 2. get email, password
// 3  find user
// 4. compare hashed password
// 5. generate tokens
// 6. return data
router.post("/signInWithPassword", [
  check("email", "Email введен некорректно").isEmail(),
  check("password", "Минимальная длина пароля 8 символов").isLength({ min: 8 }),
  check(
    "password",
    "Пароль должен содержать хотя бы одну цифру, строчную и заглавную буквы"
  ).matches(passwordRegExp),
  async (req, res) => {
    try {
      // валидация
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            errors
          }
        });
      }

      // получение данных
      const { email, password } = req.body;

      // поиск существующего пользователя
      const userExisting = await User.findOne({ email });
      if (!userExisting) {
        return res.status(400).json({
          error: {
            message: "EMAIL_NOT_FOUND",
            code: 400
          }
        });
      }

      // сравнение паролей
      const isPasswordEqual = await bcript.compare(
        password,
        userExisting.password
      );
      if (!isPasswordEqual) {
        return res.status(400).json({
          errorr: {
            message: "INVALID_PASSWORD",
            code: 400
          }
        });
      }

      const tokens = tokenService.generate({ _id: userExisting._id });

      await tokenService.save(userExisting._id, tokens.refreshToken);

      res.status(200).json({ ...tokens, user: userExisting._id });
    } catch (error) {}
  }
]);

router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;

    // проверка валидности refreshToken
    const data = tokenService.validateRefresh(refreshToken);

    // поиск токена в БД
    const dbToken = await tokenService.findToken(refreshToken);

    if (isInvalidToken(data, dbToken)) {
      return res.status(401).json({
        error: {
          message: "UNAUTORIZED",
          code: 401
        }
      });
    }

    const token = tokenService.generate({ _id: data._id });

    await tokenService.save(data._id, refreshToken);

    return res.status(200).json({ ...token, user: data._id });
  } catch (error) {
    return res.status(500).json({
      error: {
        message: "На сервере произошла ошибка. Попробуйте позднее."
      }
    });
  }
});

module.exports = router;
