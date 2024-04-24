function formatInteger(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function roundToPercent(number) {
    return Math.round(number * 10000) / 100 + "%";
}

function round(number, digits = 1){
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}

export {formatInteger, roundToPercent, round};