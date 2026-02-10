import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Subscriptions from "./components/subscriptions/Subscription";
import Dashboard from "./components/dashboard/Dashboard"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
