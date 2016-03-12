'use strict';
const crypto = require('crypto');

module.exports = function(key) {
  
  this.key = key;
  this.from = 'utf-8';
  this.to = 'hex';
  this.algorithm = 'aes-256-ctr';
  
  return {
    encode: (str) => {
      let encoder = crypto.createCipher(this.algorithm, this.key);
      return encoder.update(str, this.from, this.to);
    },
    decode: (str) => {
      let decoder = crypto.createDecipher(this.algorithm, this.key);
      return decoder.update(str, this.to, this.from);
    }
  } 
}