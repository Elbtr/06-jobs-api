const mongoose = require("mongoose");

const JobScema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Pleace provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Pleace provide position"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Pleace provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobScema);
