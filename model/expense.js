const Expense = require("../db/schemas/expense");

class ExpenseModel {
    static getAllSortedByMostRecent() {
        return Expense.find().sort({date: -1});
    }
    
    static getExpensesInDateRange(startDate, endDate) {
        if(startDate && endDate) {
            return Expense.find({
                $and: [
                    {date: {$gte: startDate}}, 
                    {date: {$lte: endDate}}
                ]
            }).sort({date: -1})
        }
        else if(startDate) {
            return Expense.find({
                date: {$gte: startDate}
            }).sort({date: -1})
        }
        else {
            return Expense.find({
                date: {$lte: endDate}
            }).sort({date: -1})
        }
    }

    static getByGroup(group) {
        return Expense.find({group});
    }

    static getTotalExpensOfGroup(group) {
        return Expense.aggregate(
            [
                {
                    $match: {
                        group
                    }
                },
                {
                    $group: {
                        _id: null,
                        total: {$sum: "$amount"}
                    }
                }
            ]
        )
        .then(total => total[0].total)
    }


    static createExpense(item, group, amount, date) {
        return Expense.create({item, group, amount, date});
    }

    static updateGroup(oldGroup, newGroup) {
        return Expense.findOneAndUpdate({
            group: oldGroup
        }, {
            $set: {group: newGroup}
        });
    }


}

module.exports = ExpenseModel;