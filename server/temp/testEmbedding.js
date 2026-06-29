require("dotenv").config();

const { generateEmbedding } = require("../rag/embedding");

(async () => {

    const embedding = await generateEmbedding(
        "Apa syarat kelulusan mahasiswa?"
    );

    console.log("Dimension :", embedding.length);

})();