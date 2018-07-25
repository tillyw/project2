module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      body: DataTypes.TEXT,
      username: DataTypes.STRING

      
    });

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Comment.associate = function(models) {
        Comment.belongsTo(models.Event, {
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Comment;
  };
  