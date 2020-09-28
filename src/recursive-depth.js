const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    
    let arr2 =  arr.map(item => {
      if (Array.isArray(item)) {
        
        item = 1 + this.calculateDepth(item)
      } else {
        item = 1
      }
      return item
     })

    if (arr2.length === 0) {
      return 1;
    }

    return Math.max(...arr2)
  }
};
