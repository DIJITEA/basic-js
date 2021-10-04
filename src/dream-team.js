import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam( members ) {
  if (Array.isArray(members) == false) {
    return false;
  }
  members = members.filter((x) => !!x).sort();
  for (var i = 0; i != members.length; i++) {
    if (typeof members[i] != "string") {
      members[i] = "";
    }
  }
  for (var i = 0; i != members.length; i++) {
    var j = 0;
    while (members[i][j] == " ") {
      j++;
    }
    members[i] = members[i][j];
  }

  return members.sort().join("").toUpperCase().split("").sort().join("");
}
