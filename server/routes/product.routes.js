const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth.middleware");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Product.find();
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
router.patch("/:productId", auth, async (req, res) => {
  try {
    const { productId } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true
    });
    return res.status(200).send(updateProduct);
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
