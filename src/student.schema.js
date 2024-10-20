const mongoose = require('mongoose');

// Define the student schema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
