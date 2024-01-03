const Expense = require("../db/schemas/expense");

class ExpenseModel {
    static getAllSortedByMostRecent() {
        return Expense.find().sort({date: -1});
    }

    static createExpense(item, group, amount, date) {
        return Expense.create({item, group, amount, date});
    }
}

module.exports = ExpenseModel;