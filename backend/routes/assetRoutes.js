import express from "express";

import {
  createAsset,
  getAssets,
  updateAsset,
  deleteAsset,
} from "../controllers/assetController.js";

const router = express.Router();

router.get("/", getAssets);
router.post("/", createAsset);
router.put("/:id", updateAsset);
router.delete("/:id", deleteAsset);

export default router;