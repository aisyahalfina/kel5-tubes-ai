// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// require("./config/database");

// const documentRoutes = require("./routes/documentRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Folder uploads agar bisa diakses
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/api/documents", documentRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// // Test API
// app.get("/", (req, res) => {
//     res.send("SSC AI Backend Running...");
// });

// // Jalankan server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`🚀 Server Running on http://localhost:${PORT}`);
// });

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

require("./config/database");

const documentRoutes = require("./routes/documentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/documents", documentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
    res.send("SSC AI Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running on Port ${PORT}`);
});