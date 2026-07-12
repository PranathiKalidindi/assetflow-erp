import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-slate-800">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />
        </div>

        <Bell className="text-slate-600 cursor-pointer" />
        <UserCircle size={34} className="text-slate-600 cursor-pointer" />
      </div>
    </header>
  );
}

export default Navbar;