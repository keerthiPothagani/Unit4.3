var mongoose = require("mongoose");

var loanSchema = mongoose.Schema({
  loan_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  total_loan: {
    type: Number,
  },
  paid_loan: {
    type: Number,
  },
  remaining_loan: {
    type: Number,
  },
  loan_open_date: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Loan = mongoose.model("Loan", loanSchema);
module.exports = Loan;
