import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <DashboardCard
              title="Assets Available"
              value="120"
              color="text-blue-600"
            />

            <DashboardCard
              title="Employees"
              value="250"
              color="text-green-600"
            />

            <DashboardCard
              title="Active Bookings"
              value="42"
              color="text-purple-600"
            />

            <DashboardCard
              title="Maintenance"
              value="18"
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
      </div>
    </div>
  );
}

export default Dashboard;