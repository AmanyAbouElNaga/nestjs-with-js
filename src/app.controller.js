class AppController {
  constructor(appService) {
    this.appService = appService;  // Inject the service manually
  }

  // Controller method that returns the service's message
  getHello(req, res) {
    res.send(this.appService.getHello());  // Return the response
  }
}

module.exports = AppController;
