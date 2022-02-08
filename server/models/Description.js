const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    description: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model("Description", schema);
