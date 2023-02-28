import express from "express";
import { json } from "express";
import { Router } from "express";
import serverless from "serverless-http";
import { getBooks } from "./routes/get-books";
import { getBooksChapters } from "./routes/get-books-chapters";

exports.handler = async (event, context) => {
  const api = express();
  const router = Router();
  const PORT = process.env.MONGO_URI || 8888;

  // set endpoints
  router.get("/get-books", getBooks);
  router.get("/get-book-chapters/:_id", getBooksChapters);

  api.use(json());

  //this our catch all endpoint
  api.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you are looking for.",
    });
  });

  api.listen(PORT), () => console.log(`Listening on port ${PORT}`);

  api.use("/api/", router);
  return serverless(api)(event, context);
};
