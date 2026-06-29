const repository = require("../repositories/documentRepository");
const ragService = require("./ragService");

// ======================================
// UPLOAD DOCUMENT
// ======================================
const uploadDocument = async (body, file) => {

    // Simpan metadata ke MySQL
    const documentId = await repository.createDocument({

        title: body.title,

        filename: file.filename,

        original_name: file.originalname,

        category: body.category || "Lainnya",

        description: body.description || "",

        file_type:
            file.mimetype === "application/pdf"
                ? "pdf"
                : "csv",

        mime_type: file.mimetype,

        file_size: file.size,

        uploaded_by: 1 // sementara hardcode admin

    });

    try {

        // Proses RAG
        // await ragService.processDocument(

        //     documentId,

        //     body.title,

        //     file.path

        // );
        const ragResult =
            await ragService.processDocument(

                documentId,

                body.title,

                file.path

            );


        // Update status
        await repository.updateProcessingStatus(
            documentId,
            "Completed"
        );

        // return {
        //     success: true,
        //     documentId
        // };
        return {

            success: true,

            documentId,

            chunks: ragResult.totalChunks

        };

    } catch (error) {

        // Jika gagal
        await repository.updateProcessingStatus(
            documentId,
            "Failed"
        );

        throw error;

    }

};

// ======================================
// GET ALL DOCUMENTS
// ======================================
const getAllDocuments = async () => {

    return await repository.getAllDocuments();

};

// ======================================
// GET DOCUMENT BY ID
// ======================================
const getDocumentById = async (id) => {

    return await repository.getDocumentById(id);

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

    return await repository.updateDocument(
        id,
        title,
        category,
        description
    );

};

// ======================================
// DELETE DOCUMENT
// ======================================
const deleteDocument = async (id) => {

    return await repository.deleteDocument(id);

};

module.exports = {

    uploadDocument,

    getAllDocuments,

    getDocumentById,

    updateDocument,

    deleteDocument

};