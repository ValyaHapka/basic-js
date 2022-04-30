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
  let result = '';
  let interResult = '';
  let sep = options.separator
  let add = options.addition;
  add = `${add + options.additionSeparator}${add + options.additionSeparator}${add}`
  interResult = `${str + add}`
  result = `${interResult + sep}${interResult + sep}${interResult}`
  return result
}

module.exports = {
  repeater
};
