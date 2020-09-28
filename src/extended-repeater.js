const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arrRepeatStr = [];
  let arrRepeatAddition = []
  let additionStr = '';
  let resultStr = ''

  if (options.repeatTimes != undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      arrRepeatStr.push(String(str))
    }
  } else {
    arrRepeatStr.push(String(str))
  }

  if (options.addition !== undefined) {
    if(options.additionRepeatTimes === undefined || options.additionRepeatTimes === 0) {
      arrRepeatAddition.push(String(options.addition))
    } else {
      for(let i = 0; i < options.additionRepeatTimes; i++) {
        arrRepeatAddition.push(String(options.addition))
      }
    }
  }

  if (options.additionSeparator === undefined) {
    additionStr = arrRepeatAddition.join('|')
  } else {
    additionStr = arrRepeatAddition.join(options.additionSeparator)
  }

  arrRepeatStr = arrRepeatStr.map(item => item + additionStr)
  if (options.separator === undefined) {
    resultStr = arrRepeatStr.join('+')
  } else {
    resultStr = arrRepeatStr.join(options.separator)
  }
  return resultStr
};
