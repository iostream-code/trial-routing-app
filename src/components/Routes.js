/*
    Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
        restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Login from ".././pages/login/Login";
import Dashboard from ".././pages/dasahboard/Dashboard";

export const APP_ROUTE = [
    {
        name: "Login",
        path: "/Login",
        exact: true,
        component: Login,
        restricted: true,
    },
    {
        name: "Dashboard",
        path: "/Dashboard",
        exact: true,
        component: Dashboard,
        private: true,
    },
];
