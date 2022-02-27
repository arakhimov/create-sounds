const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth.middleware");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
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
  })
  .post(async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      return res.status(201).send(newProduct);
    } catch (error) {
      res.status(500).json({
        error: {
          message:
            "На сервере произошла ошибка. Попробуйте позжеdsadsadsadsadsa.",
          code: 500
        }
      });
    }
  });

router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const currentProduct = await Product.findById(productId);
    return res.status(201).send(currentProduct);
  } catch (error) {
    res.status(500).json({
      error: {
        message: "На сервере произошла ошибка. Попробуйте позже.",
        code: 500
      }
    });
  }
});

router.patch("/:productId", async (req, res) => {
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

router.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const removedProduct = await Product.findById(productId);
    await removedProduct.remove();
    return res.status(204).send(null);
  } catch (error) {
    res.status(500).json({
      error: {
        message:
          "На сервере произошла ошибка. Попробуйте позжеsfdsffdsfdsfsfdsfds.",
        code: 500
      }
    });
  }
});

module.exports = router;
