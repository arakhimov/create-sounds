const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    content: { type: String, required: true },
    pageId: { type: Schema.Types.ObjectId, ref: "User" },
    userId: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = model("Comment", schema);
