const moment = require("moment");

module.exports = () => {
    console.log(`moment(): ${moment()} is now`);

    console.log(`moment("1996-05-10"): ${moment("1996-05-10")}`);
}