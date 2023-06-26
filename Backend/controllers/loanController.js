const BaseController = require("./baseController");
const LoanModel = require("../models/loanModel");
class Loan extends BaseController {
  constructor() {
    super(Loan, LoanModel);
  }
}
module.exports = new Loan();
