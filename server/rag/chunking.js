const fs = require("fs");
const pdf = require("pdf-parse");

const extractPDF = async (filePath) => {

    const buffer = fs.readFileSync(filePath);

    const data = await pdf(buffer);

    return data.text;

};

const chunkText = (
    text,
    chunkSize = 500,
    overlap = 50
) => {

    const words = text
        .replace(/\r/g, " ")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ");

    const chunks = [];

    for (
        let i = 0;
        i < words.length;
        i += (chunkSize - overlap)
    ) {

        chunks.push(
            words
                .slice(i, i + chunkSize)
                .join(" ")
        );

    }

    return chunks;

};

module.exports = {

    extractPDF,

    chunkText

};