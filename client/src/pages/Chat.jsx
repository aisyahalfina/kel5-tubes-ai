import { useState } from "react";

import chatService from "../services/chatService";

import ChatBox from "../components/chat/ChatBox";

function Chat() {

    const [messages, setMessages] = useState([]);

    const [question, setQuestion] = useState("");

    const [loading, setLoading] = useState(false);

    // ==========================
    // SEND DARI INPUT
    // ==========================

    const send = async () => {

        if (!question.trim()) return;

        const q = question;

        setQuestion("");

        setMessages(prev => [

            ...prev,

            {

                sender: "user",

                text: q

            }

        ]);

        setLoading(true);

        try {

            const result = await chatService.sendMessage(q);

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: result.answer,

                    source: result.source // <- penting

                }

            ]);

        } catch {

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: "Maaf terjadi kesalahan."

                }

            ]);

        }

        setLoading(false);

    };

    // ==========================
    // QUICK QUESTION
    // ==========================

    const sendQuickQuestion = async (text) => {

        setMessages(prev => [

            ...prev,

            {

                sender: "user",

                text

            }

        ]);

        setLoading(true);

        try {

            const result = await chatService.sendMessage(text);

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: result.answer,

                    source: result.source // <- penting

                }

            ]);

        } catch {

            setMessages(prev => [

                ...prev,

                {

                    sender: "ai",

                    text: "Maaf terjadi kesalahan."

                }

            ]);

        }

        setLoading(false);

    };

    return (

        <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-white h-screen flex flex-col">

            <ChatBox

                messages={messages}

                loading={loading}

                onQuickQuestion={sendQuickQuestion}

            />

            <div className="px-8 pb-8">

                <div className="max-w-5xl mx-auto bg-white rounded-full shadow-xl border flex items-center p-2">

                    <input

                        className="flex-1 px-6 py-4 outline-none bg-transparent"

                        placeholder="Tanyakan sesuatu..."

                        value={question}

                        onChange={(e) =>

                            setQuestion(e.target.value)

                        }

                        onKeyDown={(e) => {

                            if (e.key === "Enter") {

                                send();

                            }

                        }}

                    />

                    <button

                        onClick={send}

                        disabled={loading}

                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-24 h-16 text-2xl transition"

                    >

                        {

                            loading

                                ? "..."

                                : "➜"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Chat;