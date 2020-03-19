module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    let answerArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                answerArr.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                answerArr.push(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-next') {
            if (i < arr.length - 1) {
                i++;
            }
        } else if (arr[i] === '--discard-prev') {
            if (answerArr.length > 0) {
                answerArr.pop();
            }
        } else {
            answerArr.push(arr[i]);
        }
    }

    return answerArr;
};
