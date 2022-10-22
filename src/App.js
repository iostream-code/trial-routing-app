import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes/Routes";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Client from "./pages/client/Client";
import Analytics from "./pages/analytics/Analytics";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <PrivateRoute>
                <ResponsiveAppBar />
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/Client"
            element={
              <PrivateRoute>
                <ResponsiveAppBar />
                <Client />
              </PrivateRoute>
            }
          />
          <Route
            path="/Analytics"
            element={
              <PrivateRoute>
                <ResponsiveAppBar />
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <PrivateRoute>
                <ResponsiveAppBar />
                <Profile />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
