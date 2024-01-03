const { Router } = require("express");
const ExpenseModel = require("../model/expense");
const Helper = require("../utils/helpers");

const router = Router();

router.get("/", (req, res) => {
    const startDate = req.query.startDate ? req.query.startDate : false;
    const endDate = req.query.endDate ? req.query.endDate : false;

    if(startDate || endDate) {
        ExpenseModel.getExpensesInDateRange(startDate,endDate)
        .then(expenses => {
            res.send(expenses);
        })
    }
    else {
        ExpenseModel.getAllSortedByMostRecent()
        .then(expenses => {
            res.send(expenses)
        })
    }

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
    .then(changeExpense => {
        const {item, group} = changeExpense;
        res.send(`${item} group changed to ${group}`);
    })
})

router.get("/by-group/:group", (req, res) => {
    const group = req.params.group;
    const total = req.query.total;

    if(total === "true") {
        ExpenseModel.getTotalExpensOfGroup(group)
        .then(total => {
            res.send({total});
        })
    }
    else {
        ExpenseModel.getByGroup(group)
        .then(expenses => {
            res.send(expenses);
        })
    }
})

router.get("/by-date/:startDate/:endDate", (req, res) => {

})

module.exports = router;