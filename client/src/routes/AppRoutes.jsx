import {
    Routes,
    Route
} from "react-router-dom";

import Login from "../pages/Login";

import AdminLayout from "../layouts/AdminLayout";

import AdminDashboard from "../pages/AdminDashboard";

import Upload from "../pages/Upload";

import Documents from "../pages/Documents";

import Chat from "../pages/Chat";

import History from "../pages/History";

import Profile from "../pages/Profile";

import Landing from "../pages/Landing";


function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Landing />}
            />

            <Route
                path="/chat"
                element={<Chat />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                element={<AdminLayout />}
            >

                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/admin/upload"
                    element={<Upload />}
                />

                <Route
                    path="/admin/documents"
                    element={<Documents />}
                />

                <Route
                    path="/admin/chat"
                    element={<Chat />}
                />

                <Route
                    path="/admin/history"
                    element={<History />}
                />

                <Route
                    path="/admin/profile"
                    element={<Profile />}
                />

            </Route>

        </Routes>

    );

}

export default AppRoutes;