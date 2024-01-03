const { Router } = require("express");
const ExpenseModel = require("../model/expense");

const router = Router();

router.get("/", (req, res) => {
    ExpenseModel.getAllSortedByMostRecent()
    .then(expenses => {
        res.send(expenses)
    })
})

module.exports = router;