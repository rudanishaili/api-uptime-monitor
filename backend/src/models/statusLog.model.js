const mongoose = require("mongoose");

const statusLogSchema = new mongoose.Schema(
  {
    api: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MonitoredAPI",
      required: true,
    },
    status: {
      type: String,
      enum: ["UP", "DOWN"],
      required: true,
    },
    responseTime: {
      type: Number, // ms
    },
    checkedAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("StatusLog", statusLogSchema);
