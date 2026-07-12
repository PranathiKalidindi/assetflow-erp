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