import {
  LayoutDashboard,
  Boxes,
  Users,
  CalendarDays,
  Wrench,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Boxes, label: "Assets" },
  { icon: Users, label: "Employees" },
  { icon: CalendarDays, label: "Bookings" },
  { icon: Wrench, label: "Maintenance" },
  { icon: ClipboardList, label: "Audit" },
  { icon: BarChart3, label: "Reports" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10 text-blue-400">
        AssetFlow
      </h1>

      <nav className="space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;