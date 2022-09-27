const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const UserData = mongoose.model("UserData", newUser);

module.exports = UserData;
