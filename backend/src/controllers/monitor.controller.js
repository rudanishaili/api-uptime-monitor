exports.createMonitor = async (req, res) => {
  try {
    const { name, url, interval } = req.body;

    if (!name || !url) {
      return res.status(400).json({
        message: "Name and URL are required",
      });
    }

    res.status(201).json({
      message: "Monitor created successfully",
      data: {
        name,
        url,
        interval: interval || 5,
        user: req.user.id,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
