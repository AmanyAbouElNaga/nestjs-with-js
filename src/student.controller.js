class StudentController {
    constructor(studentService) {
      this.studentService = studentService;  // Inject the student service
    }
  
    // Get all students
    async getAllStudents(req, res) {
      const students = await this.studentService.findAll();
      res.json(students);  // Return the list of students
    }
  
    // Get a single student by ID
    async getStudentById(req, res) {
      const { id } = req.params;  // Get the student ID from the route parameters
      const student = await this.studentService.findById(id);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    }
  
    // Create a new student
    async createStudent(req, res) {
      const studentData = req.body;  // Get the new student data from the request body
      const newStudent = await this.studentService.create(studentData);
      res.status(201).json(newStudent);  // Respond with the created student
    }
  
    // Update a student's details
    async updateStudent(req, res) {
      const { id } = req.params;
      const updateData = req.body;  // Get the updated data from the request body
      const updatedStudent = await this.studentService.update(id, updateData);
      if (updatedStudent) {
        res.json(updatedStudent);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    }
  
    // Delete a student by ID
    async deleteStudent(req, res) {
      const { id } = req.params;
      const deletedStudent = await this.studentService.delete(id);
      if (deletedStudent) {
        res.json({ message: 'Student deleted successfully', student: deletedStudent });
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    }
  }
  
  module.exports = StudentController;
  