const moment = require("moment");

const DATE_FORMAT = "LLLL"

class Helper {
    static getDate(date) {
        return date ? 
            moment(date).format(DATE_FORMAT)
            : moment().format(DATE_FORMAT);
    }
}

module.exports = Helper;