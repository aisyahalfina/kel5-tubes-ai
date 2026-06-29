import { useNavigate } from "react-router-dom";

function Landing() {

    const navigate = useNavigate();

    return (

        <div className="h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center overflow-hidden">

            <div className="max-w-6xl w-full px-8">

                {/* Header */}

                <div className="text-center mb-8">

                    <div className="text-5xl mb-2">
                        🤖
                    </div>

                    <h1 className="text-5xl font-bold text-slate-800">
                        SSC AI Assistant
                    </h1>

                    <p className="text-gray-500 mt-2 text-lg">
                        Asisten AI berbasis dokumen resmi
                    </p>

                    <p className="text-gray-500">
                        Telkom University Surabaya
                    </p>

                </div>

                {/* Card */}

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Mahasiswa */}

                    <div className="bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition">

                        <div className="text-5xl">
                            👨‍🎓
                        </div>

                        <h2 className="text-2xl font-bold mt-3">
                            Mahasiswa
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Gunakan AI untuk mencari informasi akademik.
                        </p>

                        <ul className="mt-5 space-y-2 text-gray-700">

                            <li>📄 Pedoman Akademik</li>

                            <li>💼 Magang</li>

                            <li>📚 MBKM</li>

                            <li>🎓 Kelulusan</li>

                            <li>📝 Administrasi</li>

                        </ul>

                        <button

                            onClick={() => navigate("/chat")}

                            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"

                        >

                            Masuk Chat AI

                        </button>

                    </div>

                    {/* Admin */}

                    <div className="bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl transition">

                        <div className="text-5xl">
                            👨‍💼
                        </div>

                        <h2 className="text-2xl font-bold mt-3">
                            Administrator
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Kelola dokumen dan AI SSC.
                        </p>

                        <ul className="mt-5 space-y-2 text-gray-700">

                            <li>📄 Upload Dokumen</li>

                            <li>📂 Kelola Dokumen</li>

                            <li>🧠 Training AI</li>

                            <li>📊 Dashboard</li>

                            <li>💬 Riwayat Chat</li>

                        </ul>

                        <button

                            onClick={() => navigate("/login")}

                            className="w-full mt-6 bg-slate-900 hover:bg-black text-white py-3 rounded-xl font-semibold transition"

                        >

                            Login Administrator

                        </button>

                    </div>

                </div>

                {/* Footer */}

                <div className="text-center mt-6 text-gray-500 text-sm">

                    © 2026 SSC AI Assistant • Sistem Informasi • Telkom University Surabaya

                </div>

            </div>

        </div>

    );

}

export default Landing;