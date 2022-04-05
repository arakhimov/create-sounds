const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    image: String,
    // isAdmin: Boolean,
    sex: { type: String, enum: ["male", "female", "other"] }
  },
  { timestamps: true }
);

module.exports = model("User", schema);
