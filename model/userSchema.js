const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
  },

  last_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  confirm_password: {
    type: String,
    trim: true,
  },
  user_name: {
    type: String,
  },
  token: {
    type: String,
  },
});
const UserData = new mongoose.model("User", userSchema);
module.exports = UserData;
