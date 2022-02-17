const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  pin: {
    type: Number,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  mobile_no: {
    type: Number,
    required: true,
    trim: true,
  },
  // city: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});
const AddressSchema = new mongoose.model("UserAddress", addressSchema);
module.exports = AddressSchema;
