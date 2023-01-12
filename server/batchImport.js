const res = require("express/lib/response");
const { MongoClient, Db } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
console.log(process.env);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { books } = require("./data");

const batchImport = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect;

    const insertArray = [{ _id: "BK01", quotes: books.BK01 }];

    const db = client.db("simple_note");

    await db.collection("books").insertMany(insertArray);
  } catch (error) {
    console.log(error);
  }

  client.close();
  console.log("disconnected!");
};

batchImport();
