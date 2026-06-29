const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    sendMessage,
    getHistory
} = require("../controllers/chatController");

router.post(
    "/",
    authMiddleware,
    sendMessage
);

router.get(
    "/history",
    authMiddleware,
    getHistory
);

module.exports = router;