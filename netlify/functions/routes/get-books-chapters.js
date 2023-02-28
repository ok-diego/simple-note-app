"use strict";

//const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";

require("dotenv").config();

const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION } = process.env;
// console.log(process.env);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// GET one book chapters data by book id
export const getBooksChapters = async (req, res) => {
  // create a new mongodb client
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect();

    // connect to the database
    //const db = client.db("simple_note");
    const db = client.db(MONGO_DATABASE);

    // set req.params
    // our books ids are strings(not numbers)
    // we don't need to add Number before req.params
    const _id = req.params._id;
    console.log(_id);

    //const findOneResult = await db.collection("books").findOne({ _id });
    const findOneResult = await db
      .collection(MONGO_COLLECTION)
      .findOne({ _id });
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
  console.log("disconnected from root!");
};
