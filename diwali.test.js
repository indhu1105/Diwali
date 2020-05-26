let indhu = require('./node_modules/indhu-test/indhu');
let diwali = require('./diwali');

let t_date = new Date("2020-5-26");
let d_date = new Date("2020-11-14");

//pass case
indhu.test(diwali(t_date,d_date)).toBeEqualTo(173);

//fail case
t_date = new Date("2020-1-1");

indhu.test(diwali(t_date,d_date)).toBeEqualTo(177);

