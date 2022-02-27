const Category = require("../models/Category");
const Description = require("../models/Description");
const Product = require("../models/Product");
const categoryMock = require("../mock/categories.json");
const descriptionMock = require("../mock/descriptions.json");
const productMock = require("../mock/products.json");

module.exports = async () => {
  const categories = await Category.find();
  if (categories.length !== categoryMock.length) {
    await createInitialEntity(Category, categoryMock);
  }

  const description = await Description.find();
  if (description.length !== descriptionMock.length) {
    await createInitialEntity(Description, descriptionMock);
  }

  const product = await Product.find();
  if (product.length < productMock.length) {
    await createInitialEntity(Product, productMock);
  }
};

async function createInitialEntity(Model, data) {
  return Promise.all(
    data.map(async item => {
      Model.collection.drop();
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
