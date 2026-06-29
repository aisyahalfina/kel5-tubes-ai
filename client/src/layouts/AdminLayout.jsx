import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";

import Navbar from "../components/layout/Navbar";

function AdminLayout() {

    return (

        <div className="flex h-screen bg-slate-100">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <div className="p-8 overflow-auto flex-1">

                    <Outlet />

                </div>

            </div>

        </div>

    );

}

export default AdminLayout;