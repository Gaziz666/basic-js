const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) -1;
  let turnsSpeedPS = 3600 / turnsSpeed
  let seconds = turns * turnsSpeedPS;
  let result = {
    "turns": turns,
    "seconds": Math.floor(seconds)
  }
  return result
};
