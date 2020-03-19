module.exports = function createDreamTeam(array) {
  if (Array.isArray(array)) {
    answer = [];
    array.forEach(element => {
      if (typeof element == 'string') {
        element = element.trim();
        answer.push(element[0].toUpperCase());
      }
    });
    return answer.sort().join('');
  }
  else {
    return false;
  }
};