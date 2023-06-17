const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const adminsRouter = express.Router();

// routes

// adminsRouter.get("/", (req, res) => {
//   let adminToken = req.headers.authorization;

//   let selectMainAdminQuery = `SELECT * FROM Admins WHERE token = "${adminToken}"`;

//   SabzLearnShopDB.query(selectMainAdminQuery, (err, result) => {
//     if (err) {
//       res.send(null);
//     } else {
//       res.send(result);
//     }
//   });
// });

adminsRouter.get("/", (req, res) => {
  console.log('get Admins');
  let selectMainAdminQuery = `SELECT * FROM Admins`;
  SabzlearnShopDB.query(selectMainAdminQuery, (err, result) => {
    console.log('get Admins query');
    if (err) {
      console.log(err);
      res.send(null);
    } else {
      console.log('get Admins query result');
      res.send(result);
    }
  });
});

module.exports = adminsRouter;
