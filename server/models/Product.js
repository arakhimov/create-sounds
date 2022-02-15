const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    categories: Array,
    description: String,
    // categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    // description: { type: Schema.Types.ObjectId, ref: "Description" },
    cost: { type: Number, required: true },
    amount: { type: Number, required: true },
    url: String
  },
  { timestamps: true }
);

module.exports = model("Product", schema);
