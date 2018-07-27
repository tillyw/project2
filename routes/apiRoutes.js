var db = require("../models");

module.exports = function(app) {
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });
 
 
  //get one event
  app.get("/api/events/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
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
      name: req.body.eventInput,
      movie: req.body.movieInput,
      dateAndTime: req.body.dateInput,
      location: req.body.locationInput,
      description: req.body.descriptionInput,
      user: req.body.user
    }).then(function(dbEvent) {
      res.json(dbEvent);
        });
  });


  //get all the comments inside events
  app.get("/api/comments", function(req, res) {
    db.Comment.findAll({}).then(function(dbComment) {
      res.json(dbComment);
    });
  });
  //posting comments inside events
  app.post("/api/comments", function(req, res) {
    db.Comment.create(req.body).then(function(dbComment) {
      res.json(dbComment);
    })
  })

};
