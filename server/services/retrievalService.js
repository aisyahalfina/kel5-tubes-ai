const db = require("../config/astra");
const { generateEmbedding } = require("../rag/embedding");

const collection = db.collection(
    process.env.ASTRA_DB_COLLECTION
);

const retrieveContext = async (question) => {

    console.log("=== RETRIEVAL SERVICE BARU ===");

    // Generate embedding dari pertanyaan
    const embedding = await generateEmbedding(question);

    console.log("Embedding:", embedding.length);

    // Cari vector paling mirip
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

    return {

        context: docs
            .map(doc => doc.content)
            .join("\n\n"),

        documents: docs

    };

};

module.exports = {
    retrieveContext
};