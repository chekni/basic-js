const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    if (array) {
        let result = [];
        const rule = new Map([
            ['--discard-next', 1],
            ['--discard-prev', -1],
            ['--double-next', 2],
            ['--double-prev', -2]
        ]);

        let flag = 0;
        let previousValue;

        for (let i = 0; i < array.length; i++) {

            if (!rule.get(array[i])) {
                result.push(array[i]);
                previousValue = array[i];

            } else {
                flag = rule.get(array[i]);

                switch (flag) {
                    case -1:
                        if (result.length > 0) {
                            if (i > 1 && rule.get(array[i - 2]) != 1) result.pop();
                        }

                        break;
                    case -2:
                        if (i > 1 && rule.get(array[i - 2]) != 1) result.push(previousValue);
                        break;
                    case 1:
                        if (i !== array.length - 1) {
                            i++;
                        }
                        break;
                    case 2:
                        if (i !== array.length - 1) {
                            result.push(array[i + 1]);
                        }
                        break;

                    default:
                        break;
                }
            }
        }
        return result;
    }
    throw new Error();
};