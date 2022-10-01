const Sequelize = require("sequelize");

module.exports = class Location extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        locationId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        lat: {
          type: Sequelize.JSON,
          defaultValue: [],
          allowNull: true,
        },
        lng: {
          type: Sequelize.JSON,
          defaultValue: [],
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "location",
        tableName: "locations",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Location.belongsTo(db.User, {
      foreignKey: "userId",

      targetKey: "userId",

      onDelete: "CASCADE",
    });
  }
};
