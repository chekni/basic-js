module.exports = class DepthCalculator {
    calculateDepth(array, rec = 1) {
        let res = rec;
        let subDepth = 0;
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                subDepth = this.calculateDepth(array[i], rec + 1);
                if (subDepth > res) {
                    res = subDepth;
                }
            }
        }
        return res;
    }
};