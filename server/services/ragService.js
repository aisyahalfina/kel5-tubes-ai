// const path = require("path");

// const { extractPDF, chunkText } = require("../rag/chunking");
// const { generateEmbedding } = require("../rag/embedding");

// const db = require("../config/astra");

// const collection = db.collection(
//     process.env.ASTRA_DB_COLLECTION
// );

// const processDocument = async (
//     documentId,
//     title,
//     filePath
// ) => {

//     const extension =
//         path.extname(filePath).toLowerCase();

//     let text = "";

//     if (extension === ".pdf") {

//         text = await extractPDF(filePath);

//     } else {

//         throw new Error("File belum didukung.");

//     }

//     const chunks = chunkText(text);

//     console.log("=================================");
//     console.log("TOTAL CHUNKS :", chunks.length);

//     const maxWords = Math.max(
//         ...chunks.map(chunk => chunk.split(/\s+/).length)
//     );

//     console.log("MAX WORDS :", maxWords);
//     console.log("=================================");

//     const documents = [];

//     for (let i = 0; i < chunks.length; i++) {

//         console.log(
//             `Embedding ${i + 1}/${chunks.length}`
//         );

//         const embedding =
//             await generateEmbedding(chunks[i]);

//         documents.push({

//             documentId,

//             title,

//             content: chunks[i],

//             $vector: embedding

//         });

//         // Delay supaya tidak kena rate limit
//         await new Promise(resolve =>
//             setTimeout(resolve, 200)
//         );

//     }

//     console.log("Insert ke Astra...");

//     await collection.insertMany(documents);

//     console.log("Selesai!");

//     return {

//         totalChunks: chunks.length

//     };

// };

// module.exports = {

//     processDocument

// };

const db = require("../config/astra");
const mysql = require("../config/database");
const { generateEmbedding } = require("../rag/embedding");

const collection = db.collection(
    process.env.ASTRA_DB_COLLECTION
);

const retrieveContext = async (question) => {

    console.log("=== RETRIEVAL SERVICE ===");

    const embedding = await generateEmbedding(question);

    const cursor = collection.find(
        {},
        {
            sort: {
                $vector: embedding
            },
            limit: 5
        }
    );

    const docs = await cursor.toArray();

    const documents = [];

    for (const doc of docs) {

        // ambil data PDF dari MySQL
        const [rows] = await mysql.query(
            `
            SELECT
                id,
                title,
                filename,
                original_name
            FROM documents
            WHERE id = ?
            `,
            [doc.document_id]
        );

        if (rows.length > 0) {
            documents.push(rows[0]);
        }

    }

    return {

        context: docs
            .map(doc => doc.content)
            .join("\n\n"),

        documents

    };

};

module.exports = {
    retrieveContext
};