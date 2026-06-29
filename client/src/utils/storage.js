export const storage = {

    saveLogin(data) {

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );

    },

    getUser() {

        return JSON.parse(
            localStorage.getItem("user")
        );

    },

    getToken() {

        return localStorage.getItem("token");

    },

    logout() {

        localStorage.clear();

    }

};