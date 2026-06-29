const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const generateResponse = async (prompt) => {

    try {

        const completion =
            await groq.chat.completions.create({

                model: process.env.GROQ_MODEL,

                messages: [

                    {
                        role: "system",
                        content:
                            "Kamu adalah AI Student Service Center."
                    },

                    {
                        role: "user",
                        content: prompt
                    }

                ],

                temperature: 0.2

            });

        return {

            success: true,

            provider: "GROQ",

            answer:
                completion
                    .choices[0]
                    .message
                    .content

            // sourceDocument: null

        };

    } catch (error) {

        console.error("Groq Error :", error.message);

        return {

            success: false,

            provider: "GROQ",

            answer: null,

            sourceDocument: null,

            error: error.message

        };

    }

};

module.exports = {
    generateResponse
};