const { Router } = require("express");
const ExpenseModel = require("../model/expense");
const Helper = require("../utils/helpers");

const router = Router();

router.get("/", (req, res) => {
    ExpenseModel.getAllSortedByMostRecent()
    .then(expenses => {
        res.send(expenses)
    })
})

router.post("/", (req, res) => {
    const {item, amount, group} = req.body;
    const date = Helper.getDate(req.body.date);

    ExpenseModel.createExpense(item, group, amount, date)
    .then((newExpense) => {
        res.send(newExpense);
    })
})

module.exports = router;