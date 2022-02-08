const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    email: { type: String, required, unique },
    password: String,
    image: String,
    isAdmin: Boolean,
    sex: { type: String, enum: ["male", "female", "other"] }
  },
  { timestamps: true }
);

module.exports = model("User", schema);
