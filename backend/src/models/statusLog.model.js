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
      type: Number, // milliseconds
    },

    errorMessage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StatusLog", statusLogSchema);
