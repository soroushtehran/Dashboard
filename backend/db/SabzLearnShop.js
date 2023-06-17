const mysql = require("mysql");

const dashboardShopDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dashboard_shop",
});

module.exports = dashboardShopDB;