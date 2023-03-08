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
