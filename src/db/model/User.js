const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const User = new Schema(
  {
    _id: { type: Number },
    name: { type: String, require: true },
    email: { type: String, maxLength: 600, require: true },
    gender: { type: String, require: true },
    status: { type: String, require: true },
  },
  {
    _id: false,
    timestamps: true,
  }
);

User.plugin(AutoIncrement, { inc_field: "_id" });

module.exports = mongoose.model("User", User);
