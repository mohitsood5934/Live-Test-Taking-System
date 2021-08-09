const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: {
      text: String,
    },
    options: [
      {
        text: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    ],
    marks: {
      correct: Number,
      wrong: Number,
      unanswered: Number,
    },
    difficulty: { type: String, default: null },
    solution: {
      text: String,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
