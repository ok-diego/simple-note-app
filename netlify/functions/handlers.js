// ES modules syntax
// import * as dotenv from "dotenv";
// dotenv.config();

// import express from "express";
//import { json } from "express";
//import { Router } from "express";
//import serverless from "serverless-http";
//import { getBooks } from "./routes/get-books.js";
//import { getBooksChapters } from "./routes/get-books-chapters.js";

// CommonJS syntax
const dotenv = require("dotenv").config();
const express = require("express");
const json = require("express");
const serverless = require("serverless-http");
const router = express.Router();
//const router = require("./routes/get-books");
const getBooks = require("./routes/get-books");
const getBooksChapters = require("./routes/get-books-chapters");

// const PORT = process.env.MONGO_URI || 8888;
//const PORT = 8888;

//const app = express();

//app.use("/api/get-books", router);

//app.listen(PORT), () => console.log(`Listening on port ${PORT}`);

exports.handler = async (event, context) => {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ message: "Hello World" }),
  // };
  const app = express();
  const PORT = process.env.MONGO_URI || 8888;
  // set endpoints
  router.get("/get-books", getBooks);
  router.get("/get-book-chapters/:_id", getBooksChapters);

  app.use(json());

  app.listen(PORT), () => console.log(`Listening on port ${PORT}`);

  app.use("/api/", router);

  return serverless(app)(event, context);
};
