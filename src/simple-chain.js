const chainMaker = {
  tempArr: [],
  getLength() {
    return this.tempArr.length;
  },
  addLink(value) {
    this.tempArr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number') {
      this.tempArr = [];
      throw new Error();
    }
    if (position < 1 || position > this.getLength()) {
      this.tempArr = [];
      throw new Error();
    }
    this.tempArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.tempArr.reverse();
    return this;
  },
  finishChain() {
    let output = '';
    this.tempArr.forEach((element, i) => {
      if (i == 0) {
        output += `( ${element} )`;
      }
      else {
        output += `~~( ${element} )`;
      }
    });
    this.tempArr = [];
    return output;
  }
};

module.exports = chainMaker;
