const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string' && +sampleActivity > 0 && +sampleActivity < MODERN_ACTIVITY) {
        const LOG_TWO = Math.log(2);
        const k = LOG_TWO / HALF_LIFE_PERIOD;
        return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
    }
    return false;
};