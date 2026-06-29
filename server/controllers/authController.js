const authService = require("../services/authService");

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await authService.login(
            email,
            password
        );

        return res.status(200).json({
            success: true,
            message: "Login berhasil",
            data: result
        });

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    login
};