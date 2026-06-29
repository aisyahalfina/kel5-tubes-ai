require("dotenv").config();

const db = require("../config/astra");

(async () => {

    try {

        const collection = db.collection(
            process.env.ASTRA_DB_COLLECTION
        );

        await collection.insertOne({

            name: "SSC AI",

            description: "Test Astra",

            $vectorize: "Ini adalah test vector."

        });

        console.log("✅ Astra Connected");

    } catch (error) {

        console.log(error);

    }

})();