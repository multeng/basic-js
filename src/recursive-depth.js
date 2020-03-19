module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, tmp = []) {
        tmp.push(depth);
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.calculateDepth(element, depth + 1, tmp)
            }
        });
        return tmp.reduce((max, element) => {
            if (element > max) {
                return element;
            }
            else {
                return max;
            }
        });
    }
};