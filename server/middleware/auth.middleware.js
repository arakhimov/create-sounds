const tokenService = require("../services/token.service");

// принимает те же параметры req и res, что и route
// плюс функцию next для следующего шага
module.exports = (req, res, next) => {
  // обрабатываем случай специального системеного метода OPTIONS
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    // формат ответа на запрос будет следующим:
    // Bearer fsfdsfsdfskjfsldfds;kfdsjfdsljfsldf
    // необходимо значение токена
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "UNAUTORIZED" });
    }

    // валидация accessToken
    const data = tokenService.validateAccess(token);

    // middleware позволяет добавлять дополнительные поля для req и res
    req.user = data;

    // необходимо вызвать метод next() для дальнейшей работы
    next();
  } catch (error) {
    return res.status(401).json({ message: "UNAUTORIZED" });
  }
};
