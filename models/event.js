module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    dateAndTime: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.STRING
  });
  return Event;
};
