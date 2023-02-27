import express from "express";
import { Router } from "express";
import { getBooks } from "./routes/get-books.js";
import { getBooksChapters } from "./routes/get-books-chapters.js";

const api = express();
const router = Router();

router.get("/api/get-books", getBooks);
router.get("/api/get-book-chapters/:_id", getBooksChapters);
