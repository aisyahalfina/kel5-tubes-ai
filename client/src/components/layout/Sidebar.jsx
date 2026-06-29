import {
    FaHome,
    FaUpload,
    FaFileAlt,
    FaRobot,
    FaHistory,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { storage } from "../../utils/storage";

function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        storage.logout();

        navigate("/login");

    };

    return (

        <aside className="w-72 h-screen bg-slate-900 text-white flex flex-col">

            <div className="px-8 py-8 border-b border-slate-700">

                <h1 className="text-3xl font-extrabold text-blue-400">

                    SSC AI

                </h1>

                <p className="text-slate-400 text-sm mt-2">

                    Student Smart Chatbot

                </p>

            </div>

            <div className="flex-1 px-5 py-6 space-y-2">

                <NavLink

                    to="/admin/dashboard"

                    className={({ isActive }) =>

                        `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-slate-800"
                        }`

                    }

                >

                    <FaHome />

                    Dashboard

                </NavLink>

                <NavLink

                    to="/admin/upload"

                    className={({ isActive }) =>

                        `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-slate-800"
                        }`

                    }

                >

                    <FaUpload />

                    Upload

                </NavLink>

                <NavLink

                    to="/admin/documents"

                    className={({ isActive }) =>

                        `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-slate-800"
                        }`

                    }

                >

                    <FaFileAlt />

                    Documents

                </NavLink>

                <NavLink

                    to="/admin/chat"

                    className={({ isActive }) =>

                        `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-slate-800"
                        }`

                    }

                >

                    <FaRobot />

                    Chat AI

                </NavLink>

                <NavLink

                    to="/admin/history"

                    className={({ isActive }) =>

                        `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-slate-800"
                        }`

                    }

                >

                    <FaHistory />

                    History

                </NavLink>

                <NavLink

                    to="/admin/profile"

                    className={({ isActive }) =>

                        `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                            ? "bg-blue-600"
                            : "hover:bg-slate-800"
                        }`

                    }

                >

                    <FaUser />

                    Profile

                </NavLink>

            </div>

            <div className="p-5 border-t border-slate-700">

                <button

                    onClick={logout}

                    className="w-full flex items-center gap-4 bg-red-500 hover:bg-red-600 rounded-xl p-4 transition"

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;