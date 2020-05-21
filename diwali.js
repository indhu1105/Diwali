
let t_date = new Date("2020/05/21");
let d_date = new Date("2020/11/14");

let diffTime = Math.abs(t_date.getTime() - d_date.getTime());
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(d_date);
console.log(t_date);
console.log(diffTime);
console.log(diffDays);

