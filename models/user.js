const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true, // still creates a MongoDB index
    // validate: {
    //   validator: async function (value) {
    //     const existingUser = await this.constructor.findOne({ email: value });
    //     return !existingUser;
    //   },
    //   message: "Email already exists.",
    // },
  },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],
});

// DO NOT use `uniqueValidator` plugin — not compatible with Mongoose v8

module.exports = mongoose.model("User", userSchema);
