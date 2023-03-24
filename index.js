const mode = process.env.mode;

if(!mode || mode === "require") {
    const {
        requireFunc
    } = require('./require');
    requireFunc();
}

if(!mode || mode === "async") {
    const Async = require('./async');
    Async.getLotto();
}