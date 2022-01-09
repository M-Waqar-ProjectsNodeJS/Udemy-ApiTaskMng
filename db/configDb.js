const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TestDB", "Db User Name", "Db Password", {
  host: "localhost", // localhost or Server Name without sql express instance i.e. SQLEXPRESS2014
  dialect: "mssql",
  port: "59652",
});

module.exports = sequelize;
