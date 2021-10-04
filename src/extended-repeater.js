import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options ) {
  let strout = str;
  let repeatTimes = "1";
  let addition = "";
  let additionSeparator = "|";
  let separator = "+";
  let additionRepeatTimes = "1";
  let additionToStr = "";
  let strReturn = "";
  if (options.hasOwnProperty("repeatTimes") == true) {
    repeatTimes = options.repeatTimes;
  }
  if (options.hasOwnProperty("additionSeparator") == true) {
    additionSeparator = options.additionSeparator;
  }

  if (options.hasOwnProperty("separator") == true) {
    separator = options.separator;
  }
  if (options.hasOwnProperty("additionRepeatTimes") == true) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.hasOwnProperty("addition") == true) {
    addition = options.addition;
  }
  for (let i = 0; i != additionRepeatTimes; i++) {
    if (i != additionRepeatTimes - 1) {
      additionToStr = additionToStr + addition + additionSeparator;
    } else {
      additionToStr = additionToStr + addition;
    }
  }
  for (let j = 0; j != repeatTimes; j++) {
    if (j != repeatTimes - 1) {
      strReturn = strReturn + strout + additionToStr + separator;
    } else {
      strReturn = strReturn + strout + additionToStr;
    }
  }

  return strReturn;
}
