const mongoose = require("mongoose");

const monitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      enum: ["GET", "POST", "PUT", "DELETE"],
      default: "GET",
    },
    expectedStatus: {
      type: Number,
      default: 200,
    },
    interval: {
      type: Number, // in minutes
      default: 5,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Monitor", monitorSchema);
