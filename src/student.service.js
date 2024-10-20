const Student = require('./student.schema');  // Import the Mongoose model

class StudentService {
  constructor() {}

  // Create a new student
  async create(studentData) {
    const newStudent = new Student(studentData);  // Create a new student document
    return await newStudent.save();  // Save it to the database
  }

  // Get all students
  async findAll() {
    return await Student.find();  // Fetch all students from the database
  }

  // Get a student by ID
  async findById(id) {
    return await Student.findById(id);  // Fetch a student by ID
  }

  // Update a student's details by ID
  async update(id, updateData) {
    return await Student.findByIdAndUpdate(id, updateData, { new: true });  // Find and update the student
  }

  // Delete a student by ID
  async delete(id) {
    return await Student.findByIdAndDelete(id);  // Find and delete the student
  }
}

module.exports = StudentService;
