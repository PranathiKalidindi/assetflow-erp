import Asset from "../models/Asset.js";

export const createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find().sort({ createdAt: -1 });
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(asset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAsset = async (req, res) => {
  try {
    await Asset.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};