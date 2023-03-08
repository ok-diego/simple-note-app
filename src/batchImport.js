// const res = require("express/lib/response");
// const { MongoClient } = require("mongodb");

// require("dotenv").config();
// const { MONGODB_URI, MONGODB_DATABASE, MONGODB_COLLECTION } = process.env;
// //console.log(process.env);

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const { books } = require("./data");

// const batchImport = async (req, res) => {
//   const client = new MongoClient(MONGODB_URI, options);

//   try {
//     await client.connect;

//     const insertArray = [{ _id: "BK03", quotes: books.BK03 }];

//     const db = client.db(MONGODB_DATABASE);

//     await db.collection(MONGODB_COLLECTION).insertMany(insertArray);
//   } catch (error) {
//     console.log(error);
//   }

//   client.close();
//   console.log("disconnected!");
// };

// batchImport();

const dotenv = require("dotenv").config();

const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const { books } = require("./data/data");

const batchImport = async (event, context) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const insertArray = [{ _id: "BK03", quotes: books.BK03 }];
    const results = await collection(collection).insertMany(insertArray);

    //return results;
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

batchImport();
