import Message from "./Message";

function ChatBox({

    messages,

    loading,

    onQuickQuestion

}) {

    if (messages.length === 0) {

        return (

            <div className="flex-1 flex justify-center items-center px-6">

                <div className="bg-white rounded-[35px] shadow-2xl p-14 w-full max-w-5xl">

                    <div className="text-center">

                        <div className="text-7xl mb-5">

                            🤖

                        </div>

                        <h1 className="text-5xl font-bold">

                            SSC AI Assistant

                        </h1>

                        <p className="mt-4 text-gray-500">

                            Tanyakan mengenai Pedoman Akademik,

                            MBKM, Magang, Kurikulum,

                            maupun Administrasi.

                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-10">

                        <button

                            onClick={() =>

                                onQuickQuestion(

                                    "Jelaskan pedoman akademik Telkom University Surabaya."

                                )

                            }

                            className="border rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-500 transition"

                        >

                            📄 Pedoman Akademik

                        </button>

                        <button

                            onClick={() =>

                                onQuickQuestion(

                                    "Apa saja syarat kelulusan mahasiswa?"

                                )

                            }

                            className="border rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-500 transition"

                        >

                            🎓 Kelulusan

                        </button>

                        <button

                            onClick={() =>

                                onQuickQuestion(

                                    "Bagaimana prosedur magang mahasiswa?"

                                )

                            }

                            className="border rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-500 transition"

                        >

                            💼 Magang

                        </button>

                        <button

                            onClick={() =>

                                onQuickQuestion(

                                    "Jelaskan program MBKM."

                                )

                            }

                            className="border rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-500 transition"

                        >

                            📚 MBKM

                        </button>

                    </div>

                </div>

            </div>

        );

    }

    return (

        <div className="flex-1 overflow-y-auto">

            <div className="max-w-6xl mx-auto px-8 py-10">

                {

                    messages.map((msg, index) => (

                        <Message

                            key={index}

                            sender={msg.sender}

                            text={msg.text}

                            source={msg.source}

                        />

                    ))

                }

                {

                    loading && (

                        <div className="text-gray-500 mt-4">

                            🤖 SSC AI sedang mengetik...

                        </div>

                    )

                }

            </div>
        </div>
    );

}

export default ChatBox;