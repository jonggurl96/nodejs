import { moduleName, add, sub } from "./calc.js";

import { nonHyperoperations, tetration, pentation, hexation, overs } from './hyperoperation.js';

const requireFunc = () => {
    const [a, b] = [10, 5];

    console.log(moduleName);
    console.log(add(a, b));
    console.log(sub(a, b));

    console.log(nonHyperoperations);
    console.log(tetration);
    console.log(pentation);
    console.log(hexation);
    console.log(overs);
};

requireFunc();