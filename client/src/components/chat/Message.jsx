function Message({

    sender,

    text,

    source

}) {

    const user = sender === "user";

    return (

        <div
            className={`flex mb-8 ${user
                    ? "justify-end"
                    : "justify-start"
                }`}
        >

            <div className="flex items-end gap-4 max-w-5xl">

                {

                    !user && (

                        <div
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-white
                                shadow
                                border
                                flex
                                items-center
                                justify-center
                                text-xl
                            "
                        >

                            🤖

                        </div>

                    )

                }

                <div
                    className={`

                        rounded-3xl

                        px-8

                        py-6

                        shadow-lg

                        ${user
                            ? "bg-blue-600 text-white"
                            : "bg-white"
                        }

                        ${user
                            ? "max-w-xl"
                            : "max-w-4xl"
                        }

                    `}
                >

                    {

                        !user && (

                            <h3 className="font-bold text-xl mb-4">

                                🤖 SSC AI Assistant

                            </h3>

                        )

                    }

                    <div
                        className="
                            whitespace-pre-wrap
                            leading-9
                            text-lg
                        "
                    >

                        {text}

                    </div>

                    {

                        !user &&
                        source &&
                        source.length > 0 && (

                            <div className="mt-8 pt-5 border-t">

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-gray-500
                                        mb-3
                                    "
                                >

                                    📚

                                    <span>

                                        Berdasarkan dokumen

                                    </span>

                                </div>

                                <div
                                    className="
                                        bg-slate-100
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-gray-700
                                        font-medium
                                    "
                                >

                                    📄 {source[0].title}

                                </div>

                            </div>

                        )

                    }

                </div>

                {

                    user && (

                        <div
                            className="
                                w-12
                                h-12
                                rounded-full
                                bg-blue-600
                                text-white
                                flex
                                justify-center
                                items-center
                                shadow
                            "
                        >

                            👤

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default Message;