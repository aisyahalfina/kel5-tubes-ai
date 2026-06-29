const { DataAPIClient } = require("@datastax/astra-db-ts");

const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);

const db = client.db(process.env.ASTRA_DB_ENDPOINT);

module.exports = db;