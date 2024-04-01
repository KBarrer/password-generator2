// Assignment code here
var bigAlphaRandom = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var littleAlphaRandom = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberRandom = ["1","2","3","4","5","6","7","8","9","0"];
var symbolRandom = ["!","@","#","$","%","&","?",];
var finalPassword = [];
var possibleCharacters = [];

console.log(bigAlphaRandom);
console.log(littleAlphaRandom);
console.log(numberRandom);
console.log(symbolRandom);

var generatePassword = function() {
  // ask for numeric input for passowrd length
  var passwordLength = window.prompt("How long do you want the password to be? (Must be between 8 and 128 characters");
  
  // passwordLength = parseInt(passwordLength);
  
  while (isNaN(passwordLength) || passwordLength <8 || passwordLength > 128) passwordLength =  window.prompt("Paasowrd length must be between 8 and 128. How long do you want your password to be?");
  console.log("Password length is " + passwordLength);

  var bigAlphaConfirm =  window.confirm("Would you like to use upper case letters?");
  var littleAlphaConfirm = window.confirm("Would you like to use lower case letters?");
  var numberConfirm = window.confirm("Would you like to use numbers?");
  var symbolConfirm = window.confirm("Would you like to use symbols?");
  

  

  if (bigAlphaConfirm) {
    possibleCharacters += (bigAlphaRandom.join(""));
    console.log("Upper case is being used");
  } else {
    console.log("uppercase is not being used");
  }

  if (littleAlphaConfirm) {
    possibleCharacters += (littleAlphaRandom.join(""));
    console.log("Lower case is being used");
  } else {
    console.log("Lower case is not being used");
  }
  
  if (numberConfirm) {
    possibleCharacters += (numberRandom.join(""));
    console.log("Number's are being used");
  } else {
    console.log("Number's are not being used");
  }

  if (symbolConfirm) {
    possibleCharacters += (symbolRandom.join(""));
    console.log("Symbols are being used");
  } else {
    console.log("Symbols are not being used");
  }

  console.log(possibleCharacters)

  for (var i = 0; i < passwordLength; i++) {
    finalPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  console.log(finalPassword);

  

  
  // console.log(finalPassword);
  return (finalPassword);
  // return ("Choices = " + passwordLength + ", " + bigAlphaConfirm + ", " + littleAlphaConfirm + ", " + numberConfirm + ", " + symbolConfirm);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
