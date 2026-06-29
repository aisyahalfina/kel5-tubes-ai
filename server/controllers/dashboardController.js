// const dashboardService = require("../services/dashboardService");

// const getDashboard = async (req, res) => {

//     try {

//         const data =
//             await dashboardService.getDashboard();

//         res.status(200).json({

//             success: true,

//             data

//         });

//     } catch (error) {

//         res.status(500).json({

//             success: false,

//             message: error.message

//         });

//     }

// };

// module.exports = {

//     getDashboard

// };

const dashboardService = require("../services/dashboardService");

const getDashboard = async (req, res) => {

    try {

        const data =
            await dashboardService.getDashboard();

        res.json({

            success: true,

            data

        });

    } catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    getDashboard

};