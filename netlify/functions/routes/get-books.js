"use strict";

const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Get books!" });
// });

//module.exports = router;

import { MongoClient } from "mongodb";
const { MongoClient } = require("mongodb");

// // import * as dotenv from "dotenv";
// // dotenv.config();

require("dotenv").config();

const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION } = process.env;
// console.log(process.env);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// // GET all books data
exports.getBooks = async (req, res) => {
  // create a new mongo client
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect();

    // connect to the database
    //const db = client.db("simple_note");
    const db = client.db(MONGO_DATABASE);

    //const findOneResult = await db.collection("books").find().toArray();
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
  } catch (error) {
    console.log(error);
  }

  client.close();
  console.log("disconnected!");
};
