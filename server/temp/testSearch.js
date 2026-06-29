require("dotenv").config();

const db = require("../config/astra");
const { generateEmbedding } = require("../rag/embedding");

(async () => {
    const collection = db.collection(process.env.ASTRA_DB_COLLECTION);

    const embedding = await generateEmbedding(
        "Apa syarat kelulusan mahasiswa?"
    );

    console.log("Embedding:", embedding.length);

    const cursor = collection.find(
        {},
        {
            sort: {
                $vector: embedding
            },
            limit: 3
        }
    );

    const docs = await cursor.toArray();

    console.log(docs);
})();