// ES modules syntax
//import * as dotenv from "dotenv";
//dotenv.config();

//import express from "express";
//import { json } from "express";
//import { Router } from "express";
//import serverless from "serverless-http";
//import { getBooks } from "./routes/get-books.js";
//import { getBooksChapters } from "./routes/get-books-chapters.js";
//import { MongoClient } from "mongodb";
//import fetch from "node-fetch";

// CommonJS syntax
const dotenv = require("dotenv").config();
const express = require("express");
const json = require("express");
const serverless = require("serverless-http");
//const router = express.Router();
//const router = require("./routes/get-books");
//const getBooks = require("./routes/get-books");
//const getBooksChapters = require("./routes/get-books-chapters");
//const { MongoClient } = require("mongodb");
//const fetch = require("notch-fetch");

const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

// // GET all books data
// async function getBooks(req, res) {
//   const { MONGODB_URI, MONGODB_DATABASE, MONGODB_COLLECTION } = process.env;

//   const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // create a new mongo client
//   const client = new MongoClient(MONGODB_URI, options);

//   try {
//     await client.connect();
//     const db = client.db(MONGODB_DATABASE);
//     const findOneResult = await db
//       .collection(MONGODB_COLLECTION)
//       .find()
//       .toArray();

//     if (findOneResult.length > 0) {
//       res
//         .status(200)
//         .json({ status: 200, data: findOneResult, message: "success!" });
//     } else {
//       res.status(404).json({ status: 404, message: "something went wrong" });
//     }

//     //return findOneResult;
//   } catch (error) {
//     console.log(error);
//     // output to netlify function log
//   } finally {
//     await client.close();
//     console.log("disconnected!");
//   }
// }

//export async function handler(event, context) {
// exports.handler = async (event, context) => {
//   // return {
//   //   statusCode: 200,
//   //   body: JSON.stringify({ message: "Hello World" }),
//   // };
//   context.callbackWaitsForEmptyEventLoop = false;

//   const app = express();
//   const PORT = process.env.MONGO_URI || 8888;

//   // // set endpoints
//   // router.get("/get-books", getBooks);
//   // router.get("/get-book-chapters/:_id", getBooksChapters);

//   app.use(json());

//   app.use("/api/get-books", getBooks);

//   app.listen(PORT), () => console.log(`Listening on port ${PORT}`);

//   try {
//     const data = await getBooks();
//     return {
//       statusCode: 200,
//       data,
//     };
//   } catch (error) {
//     console.log(error); // output to netlify function log
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: error.message }),
//     };
//   }

//   // app.use("/api/", router);

//   //return serverless(app)(event, context);
// };

const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
