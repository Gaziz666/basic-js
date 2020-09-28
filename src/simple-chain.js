const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: [],
  finish: [],
  getLength() {
    return this.value.length
  },
  addLink(value) {
    if (value === undefined) {
      this.value.push('(  )')
      return this
    }
    this.value.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.value.length) {
      this.value.splice(position - 1, 1)
      return this
    }
    this.value = [];
    throw new Error;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    this.finish = this.value
    this.value = []
    return this.finish.join('~~')
  }
};

module.exports = chainMaker;
