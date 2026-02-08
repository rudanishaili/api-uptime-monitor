const mongoose = require("mongoose");

const monitoredAPISchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    interval: {
      type: Number,
      default: 5, // minutes
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MonitoredAPI", monitoredAPISchema);
