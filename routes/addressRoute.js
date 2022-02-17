const express = require("express");
const jwt = require("jsonwebtoken");
const AddressRouter = new express.Router();
const AddressSchema = require("../model/userAddressSchema");
const auth = require("../middleware/auth");

AddressRouter.post("/address", auth, async (req, res) => {
  // try {
  //   const address = new AddressSchema(req, res);
  //   console.log(rq.body);
  //   const addressData = await address.save();
  //   res.send(addressData);
  // } catch (e) {
  //   res.send(e);
  // }
  res.status(200).send("Welcome 🙌 ");
});

module.exports = AddressRouter;
