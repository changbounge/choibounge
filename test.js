var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    character = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,character)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,character)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var hw = encrypt("may3")
  // outputs hello world
  console.log(hw)
console.log(decrypt(hw));