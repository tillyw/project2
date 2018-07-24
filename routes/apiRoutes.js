var db = require("../models");

module.exports = function(app) {
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Create a new events
  // app.post("/api/event", function(req, res) {
  //   db.Event.create(req.body).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });

  app.post("/api/newevent", function(req, res) {
    console.log(req.body);
    db.Event.create({
      eventInput: req.body.eventInput,
      dateInput: req.body.dateInput,
      locationInput: req.body.locationInput,
      descriptionInput: req.body.descriptionInput
    }).then(function(dbEvent) {
      res.json(dbEvent);
        });
  });

};
