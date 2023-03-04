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
