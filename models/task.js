const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/configDb");

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Tasks",
    timestamps: false,
  }
);

module.exports = Task;
