const express = require("express");
const router = express.Router();

const {
  createProject,
  getMyProjects,
} = require("../controllers/project.controller");

const { protect } = require("../middleware/auth.middleware");

router.post("/", protect, createProject);
router.get("/", protect, getMyProjects);

module.exports = router;
