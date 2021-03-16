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
        let resultAdditionalRepeatString = addition;
        if (additionRepeatTimes) {
            for (let i = 1; i < additionRepeatTimes; i++) {
                resultAdditionalRepeatString += additionSeparator + addition;
            }
        }
        if (repeatTimes > 1) {
            let resultRepeatString = str + resultAdditionalRepeatString;
            result = resultRepeatString;
            for (let i = 1; i < repeatTimes; i++) {
                result += separator + resultRepeatString;
            }
            return result;
        }
        return str + resultAdditionalRepeatString;
    }
};


// repeater('q62Q1BUHzT', { repeatTimes: 1, separator: 'kntiUBYlD8', addition: 'NJlyh2T5Ff', additionRepeatTimes: 5, additionSeparator: 'F8qlqGevyf' });

// 'q62Q1BUHzTNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5FfF8qlqGevyfNJlyh2T5Ff'