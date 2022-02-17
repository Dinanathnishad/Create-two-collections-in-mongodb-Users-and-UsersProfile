require("dotenv").config();
const express = require("express");
require("./db/db_conn");
const AuthUserRouter = require("./routes/userRoute");
const ProfileRouter = require("./routes/userProfileRoute");
const AddressRouter = require("./routes/addressRoute");
const port = 9000;
const app = express();
app.use(express.json());
app.use("/", AuthUserRouter);
app.use("/", ProfileRouter);
app.use("/", AddressRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
