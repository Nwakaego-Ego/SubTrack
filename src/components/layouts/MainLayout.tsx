import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}
