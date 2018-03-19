const bignum = require("bignum");
const milisecondEpochDiff = 62135596800000;

module.exports = function(timeString) {
    var time = bignum(timeString);
    var approximateTimestamp = time
        .div(10000)
        .sub(milisecondEpochDiff)
        .toNumber();
    return approximateTimestamp;
};
