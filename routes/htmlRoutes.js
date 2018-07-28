var db = require("../models");
var request = require("request");
module.exports = function (app) {

  // Load example page and pass in an example by id
  app.get("/event/:id", function (req, res) {
    db.Event.findOne({ where: { id: req.params.id }, include: [db.Comment] }).then(function (dbEvent) {
      console.log(dbEvent.movie);
      request(
        {
          //Movie OMDB API call
          method: 'GET',
          uri: "https://www.omdbapi.com/?t=" + dbEvent.movie + "&y=&plot=short&apikey=trilogy"
        }, function (error, response, body) {
          console.log(body);
          dbEvent.movieDetails = JSON.parse(body);
          res.render("event", {
            event: dbEvent,
            comment: dbEvent.Comments
          });
        }
      );
      
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id }, include: [db.Comment, db.Invitee] }).then(function(dbEvent) {
      res.render("event", {
        event: dbEvent,
        comment: dbEvent.Comments,
        invitee: dbEvent.Invitees
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

<<<<<<< HEAD
  // load newEvent page
  app.get("/newevent", function (req, res) {
    res.render("newevent");
=======
// load newEvent page
app.get("/newevent", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("newevent", {
        users: dbUser
      });
    });
>>>>>>> 448163456f326ad4485d5ef8296670c01cdfe009
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


};
