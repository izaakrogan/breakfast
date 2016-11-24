'use strict';
/* @flow */

class Stack {
  constructor() {
    this.size = 0;
    this.store = {};
  }
  push(data) {
    this.store[++this.size] = data;
  }
  pop() {
    if(this.size === 0) {
      return undefined;
    }
    var topElm = this.store[this.size--];
    return topElm;
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = Stack;
}
