"use strict";

const express = require("express");
//const morgan = require("morgan");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT);
