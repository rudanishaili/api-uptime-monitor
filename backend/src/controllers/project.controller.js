const Project = require("../models/project.model");

exports.createProject = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Project name is required" });
    }

    const project = await Project.create({
      name,
      user: req.user.id, // OWNERSHIP ENFORCED
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      user: req.user.id,
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
