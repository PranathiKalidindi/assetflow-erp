import { useEffect, useState } from "react";
import {
  getAssets,
  addAsset,
  deleteAsset,
} from "../services/assetService";

function Assets() {
  const [assets, setAssets] = useState([]);
  const [formData, setFormData] = useState({
    assetName: "",
    assetType: "",
    serialNumber: "",
  });

  const fetchAssets = async () => {
    try {
      const res = await getAssets();
      setAssets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAsset(formData);

      setFormData({
        assetName: "",
        assetType: "",
        serialNumber: "",
      });

      fetchAssets();
    } catch (err) {
      console.error(err);
      alert("Failed to add asset");
    }
  };

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this asset?"
  );

  if (!confirmDelete) return;

  try {
    await deleteAsset(id);
    fetchAssets();
  } catch (err) {
    console.error(err);
    alert("Failed to delete asset");
  }
};

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Asset Management</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 mb-8"
      >
        <div className="grid grid-cols-3 gap-4">
          <input
            name="assetName"
            placeholder="Asset Name"
            value={formData.assetName}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="assetType"
            placeholder="Asset Type"
            value={formData.assetType}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            name="serialNumber"
            placeholder="Serial Number"
            value={formData.serialNumber}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Asset
        </button>
      </form>

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Assets</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Asset</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Serial No</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id} className="border-b">
                <td className="p-2">{asset.assetName}</td>
                <td className="p-2">{asset.assetType}</td>
                <td className="p-2">{asset.serialNumber}</td>
                <td className="p-2">{asset.status}</td>
                <td className="p-2">
  <button
    onClick={() => handleDelete(asset._id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    Delete
  </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Assets;