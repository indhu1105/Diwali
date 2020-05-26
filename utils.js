function getToday() {
    return new Date();
}

function getDiwaliDate() {
    let current_year = new Date().getFullYear();
    return new Date(`${current_year}-11-14`);
}

module.exports ={
    getToday: getToday,
    getDiwaliDate: getDiwaliDate,
}