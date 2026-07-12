import Asset from "../models/Asset.js";
import Employee from "../models/Employee.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalAssets = await Asset.countDocuments();

    const availableAssets = await Asset.countDocuments({
      status: "Available",
    });

    const maintenanceAssets = await Asset.countDocuments({
      status: "Maintenance",
    });

    const totalEmployees = await Employee.countDocuments();

    res.json({
      totalAssets,
      availableAssets,
      maintenanceAssets,
      totalEmployees,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};