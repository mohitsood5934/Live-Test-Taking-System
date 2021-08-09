const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDeactivated: {
      type: String,
      required: true,
    },
    lastLoggedIn: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      enum: ["student", "teacher"],
      default: "student",
    },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.model("User", userSchema);
module.exports = User;
