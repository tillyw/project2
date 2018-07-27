module.exports = function(sequelize, DataTypes) {
    var Invitee = sequelize.define("Invitee", {
      username: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    });

    Invitee.associate = function(models) {
        Invitee.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Invitee;
  };
  