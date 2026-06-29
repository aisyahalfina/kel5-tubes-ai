const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const repository = require("../repositories/authRepository");

const login = async (email, password) => {

    const user = await repository.getUserByEmail(email);

    if (!user) {
        throw new Error("Email tidak ditemukan");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Password salah");
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    };

};

module.exports = {
    login
};