import { useState } from "react";
import { useNavigate } from "react-router-dom";

import authService from "../services/authService";
import { storage } from "../utils/storage";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const login = async (e) => {

        e.preventDefault();

        try {

            const result = await authService.login(

                email,

                password

            );

            storage.saveLogin(result.data);

            navigate("/admin/dashboard");

        } catch {

            alert("Login gagal");

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 flex">

            <div className="hidden lg:flex w-1/2 bg-blue-700 text-white justify-center items-center">

                <div>

                    <h1 className="text-6xl font-bold mb-5">

                        SSC AI

                    </h1>

                    <p className="text-xl">

                        Student Smart Chatbot

                    </p>

                    <p className="mt-4 text-blue-100">

                        AI Assistant berbasis RAG untuk layanan akademik mahasiswa.

                    </p>

                </div>

            </div>

            <div className="flex-1 flex justify-center items-center">

                <form

                    onSubmit={login}

                    className="bg-white rounded-3xl shadow-xl w-[450px] p-10"

                >

                    <h2 className="text-4xl font-bold mb-2">

                        Welcome 👋

                    </h2>

                    <p className="text-gray-500 mb-8">

                        Login sebagai Administrator

                    </p>

                    <input

                        className="w-full border rounded-xl p-4 mb-5"

                        placeholder="Email"

                        value={email}

                        onChange={(e) =>

                            setEmail(e.target.value)

                        }

                    />

                    <input

                        type="password"

                        className="w-full border rounded-xl p-4 mb-8"

                        placeholder="Password"

                        value={password}

                        onChange={(e) =>

                            setPassword(e.target.value)

                        }

                    />

                    <button

                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4"

                    >

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;