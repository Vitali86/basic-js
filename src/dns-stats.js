const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrayOfArrays = domains.map((domain) => { return domain.split('.').reverse() });
  let result = {};

  arrayOfArrays.forEach((subArr) => {
    for (let i = 0; i < subArr.length; i++){
      let name = '';
      
      if (i === 0) name = '.' + subArr[0];
      if (i === 1) name = '.' + subArr[0]+'.'+subArr[1];
      if (i === 2) name = '.' + subArr[0] + '.' + subArr[1] + '.' + subArr[2];
      
      if (!result[name]) result[name] = 0; 
      
      result[name] += 1 ;

    }
  })

  return result;


//  console.log(arrayOfArrays);
}

module.exports = {
  getDNSStats
};
// getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);