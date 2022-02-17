const express = require("express");
const AuthUserRouter = new express.Router();
const UserData = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// this API is use for User Registrar
AuthUserRouter.post("/user/register", async (req, res) => {
  try {
    const { first_name, last_name, password, email, user_name } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
      first_name: first_name,
      last_name: last_name,
      password: hash,
      email: email,
      user_name: user_name,
    };
    const user = new UserData(newUser);
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    console.log(user);

    const data = await user.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// this API is use for UserLogin
AuthUserRouter.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "brad",
    email: "brad@gmail.com",
  };

  jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

// This route is use for access the userData.
AuthUserRouter.get("/get/user", async (req, res) => {
  try {
    const getUser = await UserData.find({}).sort({ id: 1 });
    res.send(getUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

AuthUserRouter.patch("/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await UserData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = AuthUserRouter;
