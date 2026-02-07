const express = require("express");
const authRoutes = require("./src/routes/auth.routes");
const healthRoutes = require("./src/routes/health.route");

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);

module.exports = app;
