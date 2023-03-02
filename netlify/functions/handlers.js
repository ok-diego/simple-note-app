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
//const serverless = require("serverless-http");
//const router = express.Router();
//const router = require("./routes/get-books");
//const getBooks = require("./routes/get-books");
//const getBooksChapters = require("./routes/get-books-chapters");
//import { MongoClient } from "mongodb";
//const { MongoClient } = require("mongodb");

//const fetch = require("notch-fetch");
import fetch from "node-fetch";
const { MongoClient } = require("mongodb");

// // GET all books data
async function getBooks(req, res) {
  const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION } = process.env;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // create a new mongo client
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db(MONGO_DATABASE);
    const findOneResult = await db
      .collection(MONGO_COLLECTION)
      .find()
      .toArray();

    if (findOneResult.length > 0) {
      res
        .status(200)
        .json({ status: 200, data: findOneResult, message: "success!" });
    } else {
      res.status(404).json({ status: 404, message: "something went wrong" });
    }

    //return findOneResult;
  } catch (error) {
    console.log(error);
    // output to netlify function log
  } finally {
    await client.close();
    console.log("disconnected!");
  }
}

//export async function handler(event, context) {
exports.handler = async (event, context) => {
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ message: "Hello World" }),
  // };

  const app = express();
  const PORT = process.env.MONGO_URI || 8888;

  // // set endpoints
  // router.get("/get-books", getBooks);
  // router.get("/get-book-chapters/:_id", getBooksChapters);

  app.use(json());

  app.listen(PORT), () => console.log(`Listening on port ${PORT}`);

  try {
    const data = await getBooks();
    return {
      statusCode: 200,
      body: JSON.stringify({ data: findOneResult }),
    };
  } catch (error) {
    console.log(error); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }

  // app.use("/api/", router);

  // return serverless(app)(event, context);
};
