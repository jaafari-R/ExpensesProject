const Expense = require("../db/schemas/expense");

class ExpenseModel {
    static getAllSortedByMostRecent() {
        return Expense.find().sort({date: -1});
    }
}

module.exports = ExpenseModel;