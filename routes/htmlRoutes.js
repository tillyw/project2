var db = require("../models");

module.exports = function(app) {

  // Load example page and pass in an example by id
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("event", {
        event: dbEvent
      });
    });
  });


  // app.get("/event/commment/:id", function(req, res) {
  //   db.Comment.findOne({ where: { id: req.params.id } }).then(function(dbComment) {
  //     res.render("event", {
  //       event: dbComment
  //     });
  //   });
  // });

// load newEvent page
app.get("/newevent", function(req, res) {
  res.render("newevent");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  
  
};
