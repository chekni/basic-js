const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options) {
        let repeatTimes = 1,
            separator = '+',
            addition = '',
            additionRepeatTimes = 0,
            additionSeparator = '|',
            result = '';
        for (let key in options) {
            switch (key) {
                case 'repeatTimes':
                    repeatTimes = options[key];
                    break;
                case 'separator':
                    separator = options[key];
                    break;
                case 'addition':
                    addition = options[key];
                    break;
                case 'additionRepeatTimes':
                    additionRepeatTimes = options[key];
                    break;
                case 'additionSeparator':
                    additionSeparator = options[key];
                    break;
                default:
                    break;
            }
        }
        let resultAdditionalRepeatString = '';
        if (additionRepeatTimes) {
            resultAdditionalRepeatString = addition;
            for (let i = 1; i < additionRepeatTimes; i++) {
                resultAdditionalRepeatString += additionSeparator + addition;
            }
        }
        if (repeatTimes) {
            let resultRepeatString = str + resultAdditionalRepeatString;
            result = resultRepeatString;
            for (let i = 1; i < repeatTimes; i++) {
                result += separator + resultRepeatString;
            }
            return result;
        }
        return str + addition;
    }
};