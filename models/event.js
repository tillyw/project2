module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    movie: DataTypes.STRING,
    dateAndTime: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Event.associate = function(models) {
    Event.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };
  return Event;


};
