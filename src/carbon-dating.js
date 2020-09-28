const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ( sampleActivity === '' || 
        typeof(sampleActivity) !== "string" || 
        parseFloat(sampleActivity) < 0 || 
        parseFloat(sampleActivity) >= 15 ||
        isNaN(parseFloat)
        ) {
    return false
  }
  let k = 0.603 / HALF_LIFE_PERIOD
  let t = (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k
  return Math.ceil(t)
};
