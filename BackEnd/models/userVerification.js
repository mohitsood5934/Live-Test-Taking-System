import mongoose from "mongoose";
import { OTP_STATUSES } from "../constants/commonconstants";

const userVerificationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
      trim: true,
      sparse: true,
    },
    otp: {
      type: String,
    },
    resentOtpCount: {
      type: String,
    },
    expirationTime: { type: Date },
    status: { type: String, enum: Object.values(OTP_STATUSES) },
  },
  { timestamps: true }
);

userVerificationSchema.index({ email: 1 }, { sparse: true, unique: true });
const UserVerificationSchema = mongoose.model(
  "UserVerificationSchema",
  userVerificationSchema
);
module.exports = userVerificationSchema;
