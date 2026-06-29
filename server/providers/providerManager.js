const groqProvider = require("./groqProvider");
const geminiProvider = require("./geminiProvider");

const generateResponse = async (prompt) => {

    const defaultProvider =
        process.env.DEFAULT_PROVIDER || "GROQ";

    // ==========================
    // GROQ
    // ==========================
    if (defaultProvider === "GROQ") {

        const result =
            await groqProvider.generateResponse(
                prompt
            );

        if (result.success) {
            return result;
        }

        console.log("Groq gagal -> Gemini");

        const backup =
            await geminiProvider.generateResponse(
                prompt
            );

        if (backup.success) {
            return backup;
        }

        throw new Error(
            "Semua AI Provider gagal."
        );

    }

    // ==========================
    // GEMINI
    // ==========================
    if (defaultProvider === "GEMINI") {

        const result =
            await geminiProvider.generateResponse(
                prompt
            );

        if (result.success) {
            return result;
        }

        console.log("Gemini gagal -> Groq");

        const backup =
            await groqProvider.generateResponse(
                prompt
            );

        if (backup.success) {
            return backup;
        }

        throw new Error(
            "Semua AI Provider gagal."
        );

    }

    throw new Error("Provider tidak ditemukan.");

};

module.exports = {
    generateResponse
};