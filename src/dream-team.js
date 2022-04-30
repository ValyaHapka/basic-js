const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let arr = []
  members.forEach((e) => {
    if (typeof(e) === 'string') {
    e = e.trim()
    console.log(e)
    e = e.match(/\b(\w)/g).join('')
    arr.push(e)
    }
  })
  arr.sort()
  let result = arr.join('')
  return result.toUpperCase()
}
createDreamTeam(['   danik ', '    sasha', 'andrey   ', 'lesha'])
module.exports = {
  createDreamTeam
};
