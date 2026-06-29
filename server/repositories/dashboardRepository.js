// const db = require("../config/database");

// // =======================
// // TOTAL USER
// // =======================
// const countUsers = async () => {

//     const [rows] = await db.query(`
//         SELECT COUNT(*) AS total
//         FROM users
//     `);

//     return rows[0].total;

// };

// // =======================
// // TOTAL DOCUMENT
// // =======================
// const countDocuments = async () => {

//     const [rows] = await db.query(`
//         SELECT COUNT(*) AS total
//         FROM documents
//     `);

//     return rows[0].total;

// };

// // =======================
// // TOTAL CHAT
// // =======================
// const countChats = async () => {

//     const [rows] = await db.query(`
//         SELECT COUNT(*) AS total
//         FROM chat_history
//     `);

//     return rows[0].total;

// };

// // =======================
// // TOTAL CATEGORY
// // =======================
// const countCategories = async () => {

//     const [rows] = await db.query(`
//         SELECT COUNT(DISTINCT category) AS total
//         FROM documents
//     `);

//     return rows[0].total;

// };

// module.exports = {

//     countUsers,

//     countDocuments,

//     countChats,

//     countCategories

// };

const db = require("../config/database");

// =======================
// TOTAL DOCUMENT
// =======================
const countDocuments = async () => {

    const [rows] = await db.query(`
        SELECT COUNT(*) AS total
        FROM documents
    `);

    return rows[0].total;

};

// =======================
// TOTAL PDF
// =======================
const countPDF = async () => {

    const [rows] = await db.query(`
        SELECT COUNT(*) AS total
        FROM documents
        WHERE file_type = 'pdf'
    `);

    return rows[0].total;

};

// =======================
// TOTAL CSV
// =======================
const countCSV = async () => {

    const [rows] = await db.query(`
        SELECT COUNT(*) AS total
        FROM documents
        WHERE file_type = 'csv'
    `);

    return rows[0].total;

};

// =======================
// TOTAL CHAT
// =======================
const countChats = async () => {

    const [rows] = await db.query(`
        SELECT COUNT(*) AS total
        FROM chat_history
    `);

    return rows[0].total;

};

// =======================
// RECENT UPLOAD
// =======================
const getRecentUploads = async () => {

    const [rows] = await db.query(`
        SELECT
            id,
            title,
            category,
            file_type,
            processing_status,
            created_at
        FROM documents
        ORDER BY created_at DESC
        LIMIT 5
    `);

    return rows;

};

module.exports = {

    countDocuments,

    countPDF,

    countCSV,

    countChats,

    getRecentUploads

};