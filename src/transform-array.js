const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== "[object Array]") {
    console.log("not arr")
    throw new Error
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      result.push('');
      result.push('')
      i += 1;
    } else if (arr[i] === "--discard-prev") {
      if (i === 0 || result[i - 1] === '') {
        result.push('');
        continue;
      }
      result[i - 1] = '';
      result.push('')
    } else if (arr[i] === "--double-next") {
      if (i === arr.length - 1 || arr[i + 1] === '') {
        continue
      };
      result.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      if (i === 0 || result[i - 1] === '' || arr[i - 1] === '') {
        result.push('');
        continue
      };
      result.push(arr[i - 1]);
    } else {
      result.push(arr[i])
    }
  }
  return result.filter(item => item !== "")
};
