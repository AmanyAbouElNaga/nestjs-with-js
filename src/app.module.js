const AppController = require('./app.controller');  // Import existing controller
const AppService = require('./app.service');        // Import existing service
const StudentController = require('./student.controller');  // Import the new controller
const StudentService = require('./student.service');        // Import the new service

class AppModule {
  constructor() {
    // Register controllers and services here
    this.controllers = [AppController, StudentController];  // Register both controllers
    this.providers = [AppService, StudentService];  // Register both services
  }
}

module.exports = AppModule;
