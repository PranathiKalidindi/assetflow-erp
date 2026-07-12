import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    assetName: {
      type: String,
      required: true,
    },
    assetType: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["Available", "Allocated", "Maintenance"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Asset", assetSchema);