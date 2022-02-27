const jwt = require("jsonwebtoken");
const config = require("config");
const Token = require("../models/Token");

class TokenServise {
  // генерация token
  generate(payload) {
    const accessToken = jwt.sign(payload, config.get("secureAccessToken"), {
      expiresIn: "1h"
    });
    const refreshToken = jwt.sign(payload, config.get("secureRefreshToken"));

    return { accessToken, refreshToken, expiresIn: 3600 };
  }

  // сохранение token
  async save(userId, refreshToken) {
    const data = await Token.findOne({ user: userId });

    if (data) {
      data.refreshToken = refreshToken;
      return data.save();
    }

    const token = await Token.create({ user: userId, refreshToken });
    return token;
  }

  // валидация accessToken
  validateAccess(accessToken) {
    try {
      return jwt.verify(accessToken, config.get("secureAccessToken"));
    } catch (error) {
      return null;
    }
  }

  // валидация refreshToken
  validateRefresh(refreshToken) {
    try {
      return jwt.verify(refreshToken, config.get("secureRefreshToken"));
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    return await Token.findOne({ refreshToken });
  }
}

module.exports = new TokenServise();
