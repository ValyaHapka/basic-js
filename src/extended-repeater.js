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
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  let subArr = new Array(options.additionRepeatTimes).fill(`${options.addition}`)
  let subStr = subArr.join(options.additionSeparator)
  subStr = `${str}${subStr}`
  let arr = new Array(options.repeatTimes).fill(`${subStr}`);
  return arr.join(options.separator)
}
repeater('STRING', { repeatTimes: 3, separator: '**', 
  addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
module.exports = {
  repeater
};
