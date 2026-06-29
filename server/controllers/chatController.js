const chatService = require("../services/chatService");

const sendMessage = async (req, res) => {

    try {

        const userId = req.user.id;

        const { question } = req.body;

        const result = await chatService.sendMessage(
            userId,
            question
        );

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getHistory = async (req, res) => {

    try {

        const history =
            await chatService.getHistory(req.user.id);

        return res.status(200).json({
            success: true,
            data: history
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    sendMessage,
    getHistory
};