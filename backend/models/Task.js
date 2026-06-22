//Title: MONGODB Schema
//Date: 22 June, 2026
//Author: Salman Sayeed

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, //trim whitespaces
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['To Do', 'In Progress', 'Done'],
      default: 'To Do',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('KajBaki', taskSchema, 'kaj-baki');