const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let seasons = ['winter','winter','spring','spring','spring', 'summer','summer','summer', 'autumn','autumn','autumn', 'winter'];

  if (date === null || date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  try {
    date.getYear();
    // date.getTime()
  } catch {
    throw Error('Invalid date!');
  }

  //if (typeof(date) === 'function') return 'Invalid date!';
  //'Unable to determine the time of year!'
  //'Invalid date!'
  
  return seasons[date.getMonth()];
}

module.exports = {
  getSeason
};
