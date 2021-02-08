const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string' && +sampleActivity > 0 && +sampleActivity < 15) {
        const LOG_TWO = 0.693;
        return Math.ceil(MODERN_ACTIVITY / sampleActivity / (LOG_TWO / HALF_LIFE_PERIOD));
    }
    return false;
};