const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newString = [];
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  
  let addition = '';
  if (typeof options.addition === 'boolean' || options.addition === null) {
    addition = String(options.addition);
  } else if (options.addition) {
    addition = String(options.addition);
  }
  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  let additionSeparator = '|';
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    newString.push(String(str));
    for (let j = 0; j < additionRepeatTimes; j++) {
      newString.push(String(addition));
      if (!(j === additionRepeatTimes - 1)) newString.push(additionSeparator);
    }
    if (!(i === options.repeatTimes - 1)) newString.push(options.separator);
  }
  return newString.join('');

}

module.exports = {
  repeater
};
