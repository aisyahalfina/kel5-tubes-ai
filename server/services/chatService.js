const chatRepository = require("../repositories/chatRepository");

const retrievalService = require("./retrievalService");

const providerManager = require("../providers/providerManager");

const buildPrompt = require("../prompt/ragPrompt");

const sendMessage = async (
    userId,
    question
) => {

    const retrieval =
        await retrievalService.retrieveContext(
            question
        );

    const prompt = buildPrompt(

        retrieval.context,

        question

    );

    const ai =
        await providerManager.generateResponse(
            prompt
        );

    await chatRepository.saveChat(

        userId,

        question,

        ai.answer,

        retrieval.documents
            .map(d => d.title)
            .join(", "),

        ai.provider

    );

    return {

        answer: ai.answer,

        provider: ai.provider,

        source: retrieval.documents

    };

};

const getHistory = async (userId) => {

    return await chatRepository.getChatHistory(
        userId
    );

};

module.exports = {

    sendMessage,

    getHistory

};