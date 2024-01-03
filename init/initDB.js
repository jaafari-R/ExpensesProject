const { dbConnect, dbDisconnect } = require("../db/dbConnect")
const Expense = require("../db/schemas/expenses")
const expensesData = require("./expenses.json")

async function initializeDB() {
    await dbConnect()
    .then(() => {
        return Expense.insertMany(expensesData);
    })

    await dbDisconnect();
}

initializeDB();
