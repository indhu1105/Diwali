

// let diffTime = Math.abs(t_date.getTime() - d_date.getTime());
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

function diffDays(t_date, d_date) {
    let diffTime = Math.abs(t_date.getTime() - d_date.getTime());
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
    return diffDays;
}


module.exports =diffDays;

