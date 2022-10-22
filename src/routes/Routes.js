import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from ".././utils/Auth";

// User tidak bisa masuk ke Private Route tanpa login
export function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/Login" />;
    // Apakah lolos autentikasi ? Kalau iya return children : Kalau tidak masuk ke Login Page
}

// User bisa masuk ke Public Route tanpa login
export function PublicRoute({ children }) {
    const auth = useAuth();
    return auth ? <Navigate to="/Dashboard" /> : children;
}
