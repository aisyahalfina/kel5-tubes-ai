import api from "./api";

const getAll = async () => {

    const response =
        await api.get("/documents");

    return response.data.data;

};

const upload = async (formData) => {

    const response =
        await api.post(
            "/documents/upload",
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data"
                }
            }
        );

    return response.data;

};

const remove = async (id) => {

    const response =
        await api.delete(
            `/documents/${id}`
        );

    return response.data;

};

export default {

    getAll,

    upload,

    remove

};