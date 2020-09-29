const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bool){
    this.directMachine = bool
  }

  encrypt(message, key) {
    //check if parametor is undefined
    if(message === undefined || key === undefined) {
      throw new Error
    }
    //check length of key must be equal ore longer then message length
    let keyLong = ''
    while(keyLong.length < message.length) {
      keyLong = keyLong.concat(key).toUpperCase()
    }

    let countSpace = 0, 
        j = 0,
        arrEncrypt =[];

    for(let i = 0; i < message.length; i++){
      if (message[i] === ' ') { //check space
        countSpace++
        j = i - countSpace
        arrEncrypt.push(' ')
      } else if( /[^a-zA-Z]/.test(message[i])){ //check 
        arrEncrypt.push(message[i])
        countSpace++
        j = i - countSpace
      } else {
        j = i - countSpace
        let q = keyLong.charCodeAt(j);
        let kk = message.toUpperCase().charCodeAt(i);
        let charCodeEncrypt = 
            ((keyLong.charCodeAt(j) - 65) + (message.toUpperCase().charCodeAt(i) - 65)) % 26 + 65
        arrEncrypt.push(String.fromCharCode(charCodeEncrypt))
        let k
      }
    }
    if(this.directMachine === false) {
      arrEncrypt = arrEncrypt.reverse()
    }
    return arrEncrypt.join('')
  }    
  decrypt(message, key) {
    //check if parametor is undefined
    if(message === undefined || key === undefined) {
      throw new Error
    }
    //check length of key must be equal ore longer then message length
    let keyLong = ''
    while(keyLong.length < message.length) {
      keyLong = keyLong.concat(key).toUpperCase()
    }

    let countSpace = 0, 
        j = 0,
        arrDecrypt =[];
      
    for(let i = 0; i < message.length; i++){
      if (message[i] === ' ') { //check space
        countSpace++
        j = i - countSpace
        arrDecrypt.push(' ')
      } else if( /[^a-zA-Z]/.test(message[i])){ //check 
        arrDecrypt.push(message[i])
        countSpace++
        j = i - countSpace
      } else {
        j = i - countSpace
        let q = keyLong.charCodeAt(j);
        let kk = message.toUpperCase().charCodeAt(i);   //('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'`
        let charCodeEncrypt = 
          ((message.toUpperCase().charCodeAt(i) - 65) + 26 - (keyLong.charCodeAt(j) - 65)) % 26 + 65
        
          arrDecrypt.push(String.fromCharCode(charCodeEncrypt))
        let k
      }
    }
  if(this.directMachine === false) {
    arrDecrypt = arrDecrypt.reverse()
  }  
  return arrDecrypt.join('')
  }
}

module.exports = VigenereCipheringMachine;
