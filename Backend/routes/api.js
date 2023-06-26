var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const loanModel = require("../models/loanModel");

router.post("/add-loan", async (req, res) => {
  data = req.body;
  data.loan_id = uuidv4();
  loanModel.create(data, (err, loanResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: loanResponse,
    });
  });
});

router.post("/update-loan", (req, res) => {
  let data = req.body;
  loanModel.findOneAndUpdate(
    { loan_id: req.body.loan_id },
    data,
    (err, updatedLoan) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedLoan,
      });
    }
  );
});

router.get("/find-loan/:id", (req, res) => {
  loanModel.find({ loan_id: req.params.id }, (err, loanDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: loanDetails,
    });
  });
});

router.post("/delete-loan", (req, res) => {
  loanModel.findOneAndRemove(
    { loan_id: req.body.loan_id },
    (err, deletedLoan) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedLoan,
      });
    }
  );
});

router.get("/find-all-loans", (req, res) => {
  loanModel.find({}, (err, allLoanDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allLoanDetails,
    });
  });
});

module.exports = router;
