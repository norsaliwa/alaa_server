const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  question: { type: String, required: true },
  options: [
    { 
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false } // حقل لتحديد الخيار الصحيح
    }
  ],
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
