import express from "express";
import {
  createAsset,
  getAssets,
  deleteAsset,
} from "../controllers/assetController.js";

const router = express.Router();

router.post("/", createAsset);
router.get("/", getAssets);
router.delete("/:id", deleteAsset);

export default router;