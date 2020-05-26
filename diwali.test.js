let indhu = require('./node_modules/indhu-test/indhu');
let diwali = require('./diwali');
let util = require('./utils');

util.getToday = () => new Date("2020-5-26");
indhu.test(diwali()).toBeEqualTo(173);

util.getToday = () => new Date("2020-11-12");
indhu.test(diwali()).toBeEqualTo(2);

//Fail case
util.getToday = () => new Date("2020-11-18");
indhu.test(diwali()).toBeEqualTo(172);


