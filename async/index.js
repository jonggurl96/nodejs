const moment = require("moment");

const calcDrwNo = () => {
    const today = moment();
    const drwDate801st = moment("2018-04-07");
    const diff = today.diff(drwDate801st, "days");
    return 801 + Math.floor(diff / 7);
};

async function getLotto() {
    const maxDrwNo = calcDrwNo();
    for (let i = 801; i <= maxDrwNo; i++) {
        console.log(i);
        const res = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${i}`);
        if(res.ok) {
            const data = await res.json();
            console.log(data);
        }
    }
}

module.exports = {
    getLotto
}