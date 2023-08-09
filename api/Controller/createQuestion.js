const mongoose = require('mongoose');
const Question = require('../modules/Question.module');


const createQuestion = async (req, res) => {
    const { question, options } = req.body;
  
    try {
      const newQuestion = await Question.create({
        question,
        options
      });
  
      res.status(200).json({
        message: "Question created successfully",
        question: newQuestion
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error.message);
    }
  };
  
module.exports = { createQuestion };
