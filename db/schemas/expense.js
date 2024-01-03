const { Schema, model } = require("mongoose");

const ExpenseSchema = new Schema({
    item: String,
    amount: Number,
    date: Date,
    group: String
})

const Expense = model("expense", ExpenseSchema);
module.exports = Expense;