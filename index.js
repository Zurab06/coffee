const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/drinks.route");

const app = express();

app.use(express.json());

app.use(router);

mongoose.connect(
  "mongodb+srv://gaunt0066:Panzerkampf06@cluster0.6m4r7dq.mongodb.net/coffee?retryWrites=true&w=majority"
);
app.listen(3000, () => {
  console.log("server has been started");
});
