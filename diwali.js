

// let diffTime = Math.abs(t_date.getTime() - d_date.getTime());
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
let util = require('./utils');

function diffDays() {
    let t_date = util.getToday();
    let d_date = util.getDiwaliDate();
    let diffTime = Math.abs(d_date - t_date);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
    return diffDays;
}

module.exports = diffDays;

