const { NestFactory } = require('@nestjs/core');
const AppModule = require('./app.module');
const mongoose = require('mongoose');
const express = require('express');  // For JSON parsing
const AppService = require("./app.service");
const AppController = require("./app.controller")
const studentcontroller = require("./student.controller");
const studentservice = require("./student.service");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
  await mongoose.connect('mongodb://localhost:27017/student_db', {
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  app.use(express.json());  // Parse JSON requests
  
  const studentService = new studentservice();  // Create service
  const studentController = new studentcontroller(studentService);  // Create controller
  const appService = new AppService();  // Create an instance of AppService
  const appController = new AppController(appService);  // Inject AppService into AppController

  // Define the routes
  app.getHttpAdapter().get('/', (req, res) => appController.getHello(req, res));
  app.getHttpAdapter().get('/students', (req, res) => studentController.getAllStudents(req, res));
  app.getHttpAdapter().get('/students/:id', (req, res) => studentController.getStudentById(req, res));
  app.getHttpAdapter().post('/students', (req, res) => studentController.createStudent(req, res));
  app.getHttpAdapter().put('/students/:id', (req, res) => studentController.updateStudent(req, res));
  app.getHttpAdapter().delete('/students/:id', (req, res) => studentController.deleteStudent(req, res));
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}

bootstrap();
