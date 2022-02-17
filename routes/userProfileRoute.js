const express = require("express");
const ProfileRouter = new express.Router();
const ProfileSchema = require("../model/userProfileSchema");

ProfileRouter.post("/profile", async (req, res) => {
  try {
    const addProfile = new ProfileSchema(req.body);
    console.log(req.body);
    const data = await addProfile.save();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
module.exports = ProfileRouter;
