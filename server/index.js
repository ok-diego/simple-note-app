"use strict";

const express = require("express");
const morgan = require("morgan");

//const app = express();

const PORT = 8000;

const { getBooks, getBookChapters } = require("./handlers");

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))

  // this is allowing json format for the body
  .use(express.json())

  // any requests for static files will go into the public folder
  .use(express.static("public"))

  // set endpoints
  .get("/api/get-books", getBooks)
  .get("/api/get-book-chapters/:_id", getBookChapters)

  // this our catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you are looking for.",
    });
  })

  .listen(PORT),
  () => console.log(`Listening on port 8000`);
