const documentService = require("../services/documentService");

// ======================================
// UPLOAD DOCUMENT
// ======================================
const uploadDocument = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "File tidak ditemukan"
            });

        }

        const result =
            await documentService.uploadDocument(
                req.body,
                req.file
            );

        return res.status(201).json({

            success: true,

            message: "Dokumen berhasil diproses.",

            data: result

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ======================================
// GET ALL DOCUMENTS
// ======================================
const getDocuments = async (req, res) => {

    try {

        const documents =
            await documentService.getAllDocuments();

        return res.status(200).json({

            success: true,

            data: documents

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ======================================
// GET DOCUMENT BY ID
// ======================================
const getDocumentById = async (req, res) => {

    try {

        const document =
            await documentService.getDocumentById(
                req.params.id
            );

        if (!document) {

            return res.status(404).json({

                success: false,

                message: "Dokumen tidak ditemukan"

            });

        }

        return res.status(200).json({

            success: true,

            data: document

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ======================================
// UPDATE DOCUMENT
// ======================================
const updateDocument = async (req, res) => {

    try {

        const {
            title,
            category,
            description
        } = req.body;

        await documentService.updateDocument(

            req.params.id,

            title,

            category,

            description

        );

        return res.status(200).json({

            success: true,

            message: "Dokumen berhasil diperbarui"

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ======================================
// DELETE DOCUMENT
// ======================================
const deleteDocument = async (req, res) => {

    try {

        await documentService.deleteDocument(
            req.params.id
        );

        return res.status(200).json({

            success: true,

            message: "Dokumen berhasil dihapus"

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    uploadDocument,

    getDocuments,

    getDocumentById,

    updateDocument,

    deleteDocument

};