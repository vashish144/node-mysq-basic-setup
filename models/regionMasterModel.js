const Sequelize = require("sequelize");
const sequelize = require("../utils/database.js");

const Region = sequelize.define("regions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  regionName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Region;
