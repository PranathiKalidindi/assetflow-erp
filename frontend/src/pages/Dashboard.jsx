import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function Dashboard({ setPage }) {
  const [stats, setStats] = useState({
    totalAssets: 0,
    availableAssets: 0,
    maintenanceAssets: 0,
    totalEmployees: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar setPage={setPage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <DashboardCard
  title="Total Assets"
  value={stats.totalAssets}
  color="text-blue-600"
/>

<DashboardCard
  title="Available Assets"
  value={stats.availableAssets}
  color="text-green-600"
/>

<DashboardCard
  title="Employees"
  value={stats.totalEmployees}
  color="text-purple-600"
/>

<DashboardCard
  title="Maintenance"
  value={stats.maintenanceAssets}
  color="text-red-600"
/>
          </div>

          <div className="bg-white rounded-xl shadow mt-8 p-6">
            <h2 className="text-xl font-semibold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Laptop AF-001 assigned to John</li>
              <li>• Meeting Room A booked for tomorrow</li>
              <li>• Printer maintenance approved</li>
              <li>• Audit cycle scheduled for IT Department</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;