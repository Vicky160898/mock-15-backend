const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    category: { type: String },
    difficulty: { type: String, required: true },
    type: { type: String, required: true },
    correct_answer: { type: String, required: true },
    question: { type: String, required: true },
    incorrect_answers: [String],
  },
  { versionKey: false, timestamps: true }
);

const UserModel = new model("quize", UserSchema);

module.exports = UserModel;
