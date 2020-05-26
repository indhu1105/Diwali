let indhu = require('./node_modules/indhu-test/indhu');
let diwali = require('./diwali');
//pass case
indhu.test(diwali).toBeEqualTo(177);

//fail case
indhu.test(diwali).toBeEqualTo(1);

