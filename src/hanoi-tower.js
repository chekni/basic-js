const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const secInHour = 3600;
    const turns = Math.pow(2, disksNumber) - 1;
    return {
        turns: turns,
        seconds: Math.floor(secInHour / turnsSpeed * turns)
    };
};