const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let teamName = members.reduce((sum, item) => {
    
    if (typeof(item) === "string") {
      item = item.trim()
      sum.push(item[0])
    }
    return sum
  }, []);
  
  
  return teamName.map(item => item.toUpperCase()).sort().join('')
};
