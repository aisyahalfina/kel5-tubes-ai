// const dashboardRepository = require("../repositories/dashboardRepository");

// const getDashboard = async () => {

//     const totalUsers =
//         await dashboardRepository.countUsers();

//     const totalDocuments =
//         await dashboardRepository.countDocuments();

//     const totalChats =
//         await dashboardRepository.countChats();

//     const totalCategories =
//         await dashboardRepository.countCategories();

//     return {

//         totalUsers,

//         totalDocuments,

//         totalChats,

//         totalCategories

//     };

// };

// module.exports = {

//     getDashboard

// };

const dashboardRepository = require("../repositories/dashboardRepository");

const getDashboard = async () => {

    const totalDocuments =
        await dashboardRepository.countDocuments();

    const totalPDF =
        await dashboardRepository.countPDF();

    const totalCSV =
        await dashboardRepository.countCSV();

    const totalChats =
        await dashboardRepository.countChats();

    const recentUploads =
        await dashboardRepository.getRecentUploads();

    return {

        totalDocuments,

        totalPDF,

        totalCSV,

        totalChats,

        recentUploads

    };

};

module.exports = {

    getDashboard

};