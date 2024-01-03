const Expense = require("../db/schemas/expense");

class ExpenseModel {
    static getAllSortedByMostRecent() {
        return Expense.find().sort({date: -1});
    }

    static createExpense(item, group, amount, date) {
        return Expense.create({item, group, amount, date});
    }

    static updateGroup(oldGroup, newGroup) {
        console.log(oldGroup, newGroup)
        return Expense.findOneAndUpdate({
            group: oldGroup
        }, {$set: {group: newGroup}});
    }
}

module.exports = ExpenseModel;