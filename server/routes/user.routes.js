const express = require("express");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

const router = express.Router();

// обновление пользователя
router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const updateUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true
      });
      return res.status(200).send(updateUser);
    } else {
      return res.status(401).json({
        error: {
          message: "UNAUTORIZED",
          code: 401
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        message: "На сервере произошла ошибка. Попробуйте позже.",
        code: 500
      }
    });
  }
});

// получение текущего пользователя
router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId === req.user._id) {
      const currentUser = await User.findOne({ userId });
      return res.status(200).send(currentUser);
    } else {
      return res.status(401).json({
        error: {
          message: "UNAUTORIZED",
          code: 401
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      error: {
        message: "На сервере произошла ошибка. Попробуйте позже.",
        code: 500
      }
    });
  }
});

module.exports = router;
