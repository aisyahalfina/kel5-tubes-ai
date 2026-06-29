const db = require("../config/database");

const getUserByEmail = async (email) => {

    const sql = `
        SELECT *
        FROM users
        WHERE email = ?
        LIMIT 1
    `;

    const [rows] = await db.query(sql, [email]);

    return rows[0];

};

module.exports = {
    getUserByEmail
};