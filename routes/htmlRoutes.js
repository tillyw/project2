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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
