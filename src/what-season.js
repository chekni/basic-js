const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    for (let key in date) {
        if (typeof date[key] != 'number') throw new Error('Error');
    }
    if (date) {
        Object.freeze(date);
        const d = new Date(date);
        const month = d.getMonth();
        switch (month) {
            case 0:
            case 1:
            case 11:
                return 'winter';

            case 2:
            case 3:
            case 4:
                return 'spring';

            case 5:
            case 6:
            case 7:
                return 'summer';

            case 8:
            case 9:
            case 10:
                return 'autumn';

        }
    }
    return 'Unable to determine the time of year!';
};