module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    dateAndTime: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.STRING
  });

  Event.associate = function(models) {
    Event.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };

  Event.associate = function(models) {
    Event.hasMany(models.Invitee, {
      onDelete: "cascade"
    });
  };

  return Event;

};
