import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-stone-50 pb-2 dark:bg-stone-950">
      <Sidebar />
      <main className="w-full sm:w-main-width">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
