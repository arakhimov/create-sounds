const express = require("express");
const auth = require("../middleware/auth.middleware");
const Comment = require("../models/Comment");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      // фильтрация через query параметры
      const { orderBy, equalsTo } = req.query;
      const list = await Comment.find({ [orderBy]: equalsTo });

      return res.status(200).send(list);
    } catch (error) {
      res.status(500).json({
        error: {
          message: "На сервере произошла ошибка. Попробуйте позже.",
          code: 500
        }
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.user._id
      });
      return res.status(201).send({ ...newComment });
    } catch (error) {
      res.status(500).json({
        error: {
          message: "На сервере произошла ошибка. Попробуйте позже.",
          code: 500
        }
      });
    }
  });

router.delete("/:commentId", async (req, res) => {
  try {
    // получение id комментария из параметров запроса
    const { commentId } = req.params;
    // поиск удаляемого комментария
    const removedComment = await Comment.findById(commentId);

    if (removedComment.userId === req.user._id) {
      await removedComment.remove();
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
