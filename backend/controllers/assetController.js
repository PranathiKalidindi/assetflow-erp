import Asset from "../models/Asset.js";

export const createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);

    res.status(201).json(asset);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find();

    res.json(assets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndDelete(req.params.id);

    if (!asset) {
      return res.status(404).json({
        message: "Asset not found",
      });
    }

    res.json({
      message: "Asset deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};