const express = require("express");
const Description = require("../models/Description");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Description.find();
    res.status(200).send(list);
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
