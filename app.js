let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function roundToNDecimals(float,n) {
    return Math.round(float * 10**n)/10**n;
}

function fromYanToEuro(yan) {
    return roundToNDecimals(yan / oneEuroIs["JPY"], 2);
}

function fromDollarToEuro(dollar) {
    return roundToNDecimals(dollar / oneEuroIs["USD"], 2);
}

function fromDollarToYen(dollar){
    return roundToNDecimals(fromDollarToEuro(dollar) * oneEuroIs["JPY"],2);
}

function fromEuroToDollar(euros){
    return roundToNDecimals(euros * oneEuroIs["USD"],2);
}

function fromYanToPound(yan){
    return roundToNDecimals(fromYanToEuro(yan) * oneEuroIs["GBP"],2);
}

module.exports = {roundToNDecimals, fromYanToEuro, fromDollarToEuro, fromDollarToYen, fromEuroToDollar, fromYanToPound};