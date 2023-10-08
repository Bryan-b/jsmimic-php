const jsmp = require('./src');

if (typeof window !== 'undefined') {
    window.jsmimic = jsmp;
}

module.exports = jsmp;