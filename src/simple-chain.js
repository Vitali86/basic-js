const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value===null) value = 'null';
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof(position) !== 'number' || position > this.chain.length) {
      this.chain = [];
      throw Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
