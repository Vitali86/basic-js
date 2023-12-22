const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let list = {};
  
  let newNames = [];

  for (let i = 0; i < names.length; i++){
    let listNames = Object.keys(list);
    // console.log(listNames);
    if (!listNames.includes(names[i])) {
      list[names[i]] = 0;
      newNames.push(names[i]);
    } else {
      list[names[i]] += 1;
      newNames.push(names[i] + `(${list[names[i]]})`);
      list[names[i] + `(${list[names[i]]})`] = 0;
    }
  }
  return newNames;
}

module.exports = {
  renameFiles
};

// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])