import api from "./api";

const sendMessage = async (question) => {

    const response = await api.post(

        "/chat",

        {

            question

        }

    );

    return response.data.data;

};

export default {

    sendMessage

};