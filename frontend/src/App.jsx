import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Employees from "./pages/Employees";

function App() {
  const [page, setPage] = useState("dashboard");

  if (page === "dashboard")
    return <Dashboard setPage={setPage} />;

  if (page === "assets")
    return <Assets />;

  if (page === "employees")
    return <Employees />;

  return null;
}

export default App;