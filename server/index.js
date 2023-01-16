"use strict";

const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = 8000;

const { getBooks } = require("./handlers");

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app
  .use(morgan("tiny"))

  // this is allowing json format for the body
  .use(express.json)

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // .get("/", (req, res) => {
  //   res.send("Hello world");
  // });

  .get("/api/get-books", getBooks)

  // this our catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you are looking for.",
    });
  })

  .listen(PORT),
  () => console.log(`Listening on port 8000`);
