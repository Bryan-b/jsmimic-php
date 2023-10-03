const jsmp = require('./dist');

if (typeof window !== 'undefined') {
    window.jsmimic = jsmp;
}

module.exports = jsmp;