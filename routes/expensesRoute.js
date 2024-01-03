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

router.patch("/update-group/", (req, res) => {
    const {oldGroup, newGroup} = req.body;

    ExpenseModel.updateGroup(oldGroup, newGroup)
    .then((changeExpense) => {
        const {item, group} = changeExpense;
        res.send(`${item} group changed to ${group}`);
    })
})

router.get("/by-group/:group", (req, res) => {
    const group = req.params.group;

    ExpenseModel.getByGroup(group)
    .then(expenses => {
        res.send(expenses);
    })
})

module.exports = router;