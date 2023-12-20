const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// function encodeToRot13(str) {
//   const arr = str.split('');
//   const encodedArr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     let code = arr[i].charCodeAt();
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//       code += 13;
//       if (code > 122 || (code > 90 && code < 110)) {
//         code -= 26;
//       }
//       encodedArr.push(String.fromCharCode(code));
//     } else {
//       encodedArr.push(String.fromCharCode(code));
//     }
//   }
//   return encodedArr.join('');
// }



class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = true;
    if (isDirect === false) this.isDirect = false;

  }
  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');

    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const mesArr = message.split('');
    const keyArr = key.split('');
    let newMess = [];
    let numberOfSpaces = 0;
    
    function encode(char, keyChar) {
      let charIndex = A.indexOf(char.toUpperCase());
      let keyCode = A.indexOf(keyChar.toUpperCase());
      const aArr = A.split('');
      const code = char.charCodeAt();

      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return aArr[charIndex + keyCode];
      } else if (code === 32) {
        numberOfSpaces += 1;
        return char;
      } else {
        return char;
      }
    }

    for (let i = 0; i < mesArr.length; i++){
      newMess.push(encode(mesArr[i], keyArr[(i - numberOfSpaces) % keyArr.length]))
    }    

    if (this.isDirect) {
      return newMess.join('').toUpperCase();
    } else {
      return newMess.reverse().join('').toUpperCase();
    }

  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error('Incorrect arguments!');

    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mesArr = encryptedMessage.split('');
    const keyArr = key.split('');
    let newMess = [];
    let numberOfSpaces = 0;
    
    function decode(char, keyChar) {
      let charIndex = A.indexOf(char.toUpperCase());
      let keyCode = A.indexOf(keyChar.toUpperCase());
      const aArr = A.split('');
      const code = char.charCodeAt();

      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return aArr.at(charIndex - keyCode);
      } else if (code === 32) {
        numberOfSpaces += 1;
        return char;
      } else {
        return char;
      }
    }

    for (let i = 0; i < mesArr.length; i++){
      newMess.push(decode(mesArr[i], keyArr[(i - numberOfSpaces) % keyArr.length]))
    }    

    if (this.isDirect) {
      return newMess.join('').toUpperCase();
    } else {
      return newMess.reverse().join('').toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
    
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));