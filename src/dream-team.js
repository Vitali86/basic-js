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
  let name = [];
  if (typeof (members) !== 'object') return false;
  if (!members) return false;
  for (let i = 0; i < members.length; i++){
    if (typeof (members[i]) === 'string') {
      name.push(members[i].trim().substr(0, 1).toUpperCase());
    }
  }
  return name.sort().join('');
}

module.exports = {
  createDreamTeam
};
