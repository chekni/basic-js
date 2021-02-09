const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (arr) {
        const cloneArr = [...arr];
        let result = [];
        const rule = new Map([
            ['--discard-next', 1],
            ['--discard-prev', -1],
            ['--double-next', 2],
            ['--double-prev', -2]
        ]);

        let flag = 0;
        let next = 1;
        for (let i = 0; i < cloneArr.length - 1; i++) {
            let cur = cloneArr[i];
            next = cloneArr[i + 1];

            let action = rule.get(next);
            if (cur && action && flag != 1) {
                if (flag == 2 || action == -2) {
                    result.push(cur);
                    result.push(cur);
                    i++;
                    flag = 0;
                }
                if (flag == 1 || action == -1) {
                    i++;
                    flag = 0;
                }
                if (action == 1) {
                    result.push(cur);
                    flag = 1;
                }
                if (action == 2) {
                    result.push(cur);
                    flag = 2;
                }
            } else if (typeof cur !== 'string') {
                result.push(cur);
            }

        }
        if (flag && typeof next !== 'string') {
            result.push(cloneArr[cloneArr.length - 1]);
        }
        return result;
    }
    return new Error();
};

// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));

// ['--discard-prev', 1, 2, 3],
//                 ['--double-prev', 1, 2, 3],
//                 [1, 2, 3, '--double-next'],
//                 [1, 2, 3, '--discard-next']