const express = require("express");
const mongoose = require("mongoose");
const transaction = require("./../models/TransactionModel");
const app = express();

app.route("/transaction/:period").get(async (req, response) => {
  let query = { yearMonth: req.params.period };

  // if (req.params) {
  //   response.send({
  //     error:
  //       'É necessario imformar o periodo "period" cujo valor deve estar no formato yyy-mm ',
  //   });
  // }
  const res = await transaction.find(query, function (err, transactions) {
    if (err) return console.error(err);
    response.send(transactions);
  });
});
app.route("/transaction/add/").post(async (req, res) => {
  let arr = await req.body;
  console.log(arr);
  transaction.insertMany([arr], function (err) {
    res.send({ err: "Error ao inserir" });
  });
});

// app.route("/transaction").get((_, response) => {
//   response.send({
//     error:
//       'É necessario imformar o periodo "period" cujo valor deve estar no formato yyy-mm ',
//   });
// });

module.exports = app;
