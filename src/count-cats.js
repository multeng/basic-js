module.exports = function countCats(matrix) {
  const out = matrix.reduce((total, array) => {
    return total + array.reduce((count, temp) => {
      if (temp == "^^") {
        count += 1;
      }
      return count;
    }, 0);
  }, 0);
  return out;
};
