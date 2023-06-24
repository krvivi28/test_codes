import express from "express";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("src", "public", "uploads"));
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + file.originalname;
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();
import { createAlbum, getAlbum } from "./album.controller.js";

// router.post("/", createAlbum);
router.post("/", upload.array("image", 10), createAlbum);
router.get("/", getAlbum);

export default router;
