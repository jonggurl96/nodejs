const moment = require("moment");
const fmt = "YYYY-MM-DD HH:mm:ss.SSS Z";
module.exports = () => {
    console.log(`moment(): ${moment().format(fmt)} is now`);

    console.log(`moment("1996-05-10"): ${moment("1996-05-10").format(fmt)}`);
    console.log(`moment("1996-05"): ${moment("1996-05").format(fmt)}`);

    console.log(`moment("2013-W06-5"): ${moment("2013-W06-5").format(fmt)}`);
    console.log(`moment("2013-039"): ${moment("2013-039").format(fmt)}`);

    console.log(`moment("2013-02-08T09"): ${moment("2013-02-08T09").format(fmt)}`);
    console.log(`moment("20130208T240000,000"): ${moment("20130208T240000,000").format(fmt)}`);

    console.log(`moment("2013-02-08 09:30:26.123+07"): ${moment("2013-02-08 09:30:26.123+07").format(fmt)}`);
    console.log(`moment("2013-02-08 09+07:00"): ${moment("2013-02-08 09+07:00").format(fmt)}`);
    console.log(`moment("2013-02-08 09-0100"): ${moment("2013-02-08 09-0100").format(fmt)}`);
    console.log(`moment("2013-02-08 09Z"): ${moment("2013-02-08 09Z").format(fmt)}`);
}