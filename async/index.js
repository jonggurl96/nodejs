const moment = require("moment");

const calcDrwNo = () => {
    const today = moment();
    const drwDate801st = moment("2018-04-07");
    const diff = today.diff(drwDate801st, "days");
    return 801 + Math.floor(diff / 7);
};

async function getLotto() {
    const maxDrwNo = calcDrwNo();
    for (let i = 1055; i <= maxDrwNo; i++) {
        const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${i}`);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
        }
    }
}

module.exports = {
    getLotto
}