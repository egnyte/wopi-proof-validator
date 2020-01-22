const milisecondEpochDiff = 62135596800000;

module.exports = function(timeString) {
    return +timeString / 10000 - milisecondEpochDiff;
};
