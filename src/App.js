import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Client from "./pages/client/Client";
import Analytics from "./pages/analytics/Analytics";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
