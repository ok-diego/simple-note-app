// Docs on event and context https://docs.netlify.com/functions/build/#code-your-fu
const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI, MONGO_DATABASE, MONGO_COLLECTION } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoClient = new MongoClient(MONGO_URI, options);

const clientPromise = mongoClient.connect;

const handler = async (event) => {
  try {
    const database = (await clientPromise).db(MONGO_DATABASE);
    const collection = database.collection(MONGO_COLLECTION);
    const results = await collection.find({}).limit(10).toArray();

    // if (results.length > 0) {
    //   res.status(200).json({ status: 200, data: results, message: "success!" });
    // } else {
    //   res.status(404).json({ status: 404, message: "something went wrong" });
    // }
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
