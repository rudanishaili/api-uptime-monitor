const express = require("express");
const router = express.Router();
const { createMonitor } = require("../controllers/monitor.controller");
const { protect } = require("../middleware/auth.middleware");

router.post("/", protect, createMonitor);

module.exports = router;
