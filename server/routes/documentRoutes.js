const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
    getDocuments,
    getDocumentById,
    uploadDocument,
    updateDocument,
    deleteDocument
} = require("../controllers/documentController");

// ======================================
// GET ALL DOCUMENTS
// ======================================
router.get("/", getDocuments);

// ======================================
// GET DOCUMENT BY ID
// ======================================
router.get("/:id", getDocumentById);

// ======================================
// UPLOAD DOCUMENT
// ======================================
router.post(
    "/upload",
    upload.single("document"),
    uploadDocument
);

// ======================================
// UPDATE DOCUMENT
// ======================================
router.put("/:id", updateDocument);

// ======================================
// DELETE DOCUMENT
// ======================================
router.delete("/:id", deleteDocument);

module.exports = router;