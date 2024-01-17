// Assignment code here
var lengthChar = 8;
var charChoice = []
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "<", ">", "[", "]", "{", "}", ":", "|", ";", ",", "."];
var numbChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function passwordPrompts() {

  lengthChar = parseInt(prompt("How many characters would you like your password to have?"));

  if (isNaN(lengthChar) || lengthChar < 8 || lengthChar > 128) {
    alert("Please choose a number between 8 and 128. Try again.")
    return false
  }

  if (confirm("Would you like to include lowercase letters in your password?")) {
    charChoice = charChoice.concat(lowerChar);
  }

  if (confirm("Would you like to include uppercase letters in your passoword?")) {
    charChoice = charChoice.concat(upperChar);
  }

  if (confirm("Would you like to include numbers in your password?")) {
    charChoice = charChoice.concat(numbChar);
  }

  if (confirm("Would you like to include special characters in your password?")) {
    charChoice = charChoice.concat(specChar);
  }
  return lengthChar;
}

function generatePassword() {
  var newPassword = "";

  for (i = 0; i < lengthChar; i++) {
    var char = Math.floor(Math.random() * charChoice.length);
    newPassword = newPassword + charChoice[char];
  }

  return newPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var prompt = passwordPrompts();

  if(prompt){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
