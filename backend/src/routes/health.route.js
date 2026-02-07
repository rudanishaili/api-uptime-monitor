const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");

router.get("/protected", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;
