"use strict";

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
// console.log(process.env);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// GET all books data
const getBooks = async (req, res) => {
  // create a new mongo client
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect;

    // connect to the database
    const db = client.db("simple_note");

    const insertOneResult = await db.collection("books").find().toArray();

    if (insertOneResult.length > 0) {
      res
        .status(200)
        .json({ status: 200, data: insertOneResult, message: "success!" });
    } else {
      res.status(404).json({ status: 404, message: "something went wrong" });
    }
  } catch (error) {
    console.log(error);
  }

  client.close();
  console.log("disconnected!");
};

module.exports = {
  getBooks,
};
