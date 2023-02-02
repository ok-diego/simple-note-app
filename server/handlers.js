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

    const findOneResult = await db.collection("books").find().toArray();

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

// GET all books journeys
const getBooksJourney = async (req, res) => {
  // create a new mongo client
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect;

    // connect to the database
    const db = client.db("simple_note");

    const findOneResult = await db.collection("books").find().toArray();

    let journeyValues = [];

    findOneResult.map((book) => {
      return book.quotes[0].forEach((element) => {
        if (element.readingJourney) {
          journeyValues.push(element.readingJourney);
        }
      });
    });

    console.log(journeyValues);

    if (journeyValues.length > 0) {
      res
        .status(200)
        .json({ status: 200, data: journeyValues, message: "success!" });
    } else {
      res.status(404).json({ status: 404, message: "something went wrong" });
    }
  } catch (error) {
    console.log(error);
  }

  client.close();
  console.log("disconnected!");
};

// GET one book chapters data by book id
const getBooksChapters = async (req, res) => {
  // create a new mongodb client
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("simple_note");

    // set req.params
    // our books ids are strings(not numbers)
    // we don't need to add Number before req.params
    const _id = req.params._id;
    console.log(_id);

    const findOneResult = await db.collection("books").findOne({ _id });
    //console.log(findOneResult);

    let chaptersValues = [];
    let newChaptersSet = [];

    findOneResult.quotes?.map((book) => {
      //let chaptersValues = [];
      //let newChaptersSet = [];

      return book.forEach((element) => {
        chaptersValues.push(element.chapter);

        // remove duplicates with ...new Set method
        newChaptersSet = [...new Set(chaptersValues)];
      });
    });

    // sort chapters in alphabetical order
    newChaptersSet.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));

    if (newChaptersSet) {
      res
        .status(200)
        .json({ status: 200, data: newChaptersSet, message: "success!" });
    } else {
      res.status(404).json({ status: 404, message: "something went wrong" });
    }
  } catch (error) {
    console.log(error);
  }

  // close and disconnect from database
  client.close;
  console.log("disconnected!");
};

module.exports = {
  getBooks,
  getBooksJourney,
  getBooksChapters,
};
