const mode = process.env.npm_config_mode;

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