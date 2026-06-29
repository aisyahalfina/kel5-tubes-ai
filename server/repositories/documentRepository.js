const db = require("../config/database");

// ======================================
// CREATE DOCUMENT
// ======================================
const createDocument = async (document) => {

    const sql = `
        INSERT INTO documents
        (
            title,
            filename,
            original_name,
            category,
            description,
            file_type,
            mime_type,
            file_size,
            uploaded_by,
            processing_status
        )
        VALUES (?,?,?,?,?,?,?,?,?,?)
    `;

    const [result] = await db.query(sql, [

        document.title,

        document.filename,

        document.original_name,

        document.category,

        document.description,

        document.file_type,

        document.mime_type,

        document.file_size,

        document.uploaded_by,

        "Processing"

    ]);

    return result.insertId;

};

// ======================================
// GET ALL DOCUMENTS
// ======================================
const getAllDocuments = async () => {

    const sql = `
        SELECT *
        FROM documents
        ORDER BY created_at DESC
    `;

    const [rows] = await db.query(sql);

    return rows;

};

// ======================================
// GET DOCUMENT BY ID
// ======================================
const getDocumentById = async (id) => {

    const sql = `
        SELECT *
        FROM documents
        WHERE id = ?
    `;

    const [rows] = await db.query(sql, [id]);

    return rows[0];

};

// ======================================
// UPDATE DOCUMENT
// ======================================
const updateDocument = async (
    id,
    title,
    category,
    description
) => {

    const sql = `
        UPDATE documents
        SET
            title = ?,
            category = ?,
            description = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [
        title,
        category,
        description,
        id
    ]);

    return result;

};

// ======================================
// UPDATE STATUS
// ======================================
const updateProcessingStatus = async (
    id,
    status
) => {

    const sql = `
        UPDATE documents
        SET processing_status = ?
        WHERE id = ?
    `;

    await db.query(sql, [
        status,
        id
    ]);

};

// ======================================
// DELETE DOCUMENT
// ======================================
const deleteDocument = async (id) => {

    const sql = `
        DELETE FROM documents
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [id]);

    return result;

};

module.exports = {

    createDocument,

    getAllDocuments,

    getDocumentById,

    updateDocument,

    updateProcessingStatus,

    deleteDocument

};