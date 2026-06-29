const db = require("../config/astra");

const collection = db.collection(
    process.env.ASTRA_DB_COLLECTION
);

const retrieveContext = async (question) => {

    const cursor = collection.find(
        {},
        {
            sort: {
                $vectorize: question
            },
            limit: 5
        }
    );

    const documents = await cursor.toArray();

    const context = documents
        .map((doc) => doc.content)
        .join("\n\n");

    return {
        context,
        documents
    };

};

module.exports = {
    retrieveContext
};