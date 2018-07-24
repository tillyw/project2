var db = require("../models");

module.exports = function(app) {
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Create a new events
  app.post("/api/events", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  
/// create update event route


  // Delete an event by id
  // app.delete("/api/events/:id", function(req, res) {
  //   db.Event.destroy({ where: { id: req.params.id } }).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });
};
