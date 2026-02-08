const express = require("express");
const authRoutes = require("./src/routes/auth.routes");
const healthRoutes = require("./src/routes/health.route");
const monitorRoutes = require("./src/routes/monitor.routes");

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/monitors", monitorRoutes);
app.use("/api/projects", require("./src/routes/project.routes"));

module.exports = app;
