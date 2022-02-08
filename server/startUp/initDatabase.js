const Category = require("../models/Category");
const categoryMock = require("../mock/categories.json");

module.exports = async () => {
  const categories = await Category.find();
  if (categories.length !== categoryMock.length) {
    await createInitialEntity(Category, categoryMock);
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
