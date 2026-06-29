const db = require("../config/database");

const saveChat = async (
    userId,
    question,
    answer,
    sourceDocument,
    provider
) => {

    const sql = `
        INSERT INTO chat_history
        (
            user_id,
            question,
            answer,
            source_document,
            provider
        )
        VALUES (?,?,?,?,?)
    `;

    const [result] = await db.query(sql, [
        userId,
        question,
        answer,
        sourceDocument,
        provider
    ]);

    return result;

};

const getChatHistory = async (userId) => {

    const sql = `
        SELECT *
        FROM chat_history
        WHERE user_id = ?
        ORDER BY created_at DESC
    `;

    const [rows] = await db.query(sql, [userId]);

    return rows;

};

module.exports = {
    saveChat,
    getChatHistory
};