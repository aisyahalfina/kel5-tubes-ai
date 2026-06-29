const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const generateResponse = async (prompt) => {

    try {

        const response = await ai.models.generateContent({

            model: process.env.GEMINI_MODEL,

            contents: prompt

        });

        return {

            success: true,

            provider: "GEMINI",

            answer: response.text,

            // sourceDocument: null

        };

    } catch (error) {

        console.error("Gemini Error :", error.message);

        return {

            success: false,

            provider: "GEMINI",

            answer: null,

            sourceDocument: null,

            error: error.message

        };

    }

};

module.exports = {
    generateResponse
};