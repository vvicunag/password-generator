// Assignment Code - the character pools for the password and variables that are going to be used in functions are displayed
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";
var symbolCharacters = "!#$%&?¿"; 
var characterPool = "";
var passwordLength
var lowercaseCriteria;
var uppercaseCriteria;
var numericCriteria;
var specialCriteria;
var blankpassword
var checkPassword

// function will be the trigger for the cascade of functions that generate the password, and validate user input
function executeGenerator () {
  passwordLength = prompt ("How many characters should your password have? Type a number between 8 and 128, both included.");
  if (passwordLength === "" || passwordLength < 8 || passwordLength > 128 ) {
    alert("Input a valid number!");
  }
  else {
    getCriteria();
    if (lowercaseCriteria === false && uppercaseCriteria === false && numericCriteria === false && specialCriteria === false ) {
      alert("You must select at least one criteria for your password!"); 
    }
    else {  
      generatePassword();
      writePassword();
    }
  }
}

// function will generate the prompts for the user to indicate  criteria for password, and generates a character pool accordingly
function getCriteria () {
  lowercaseCriteria = confirm("Do you want your password to have lowercase letters? Select 'Cancel' to exclude lowercase letters");
    if (lowercaseCriteria == true) {
      characterPool = characterPool.concat(lowercaseCharacters);
    } 
  uppercaseCriteria = confirm("Do you want your password to have uppercase letters? Select 'Cancel' to exclude uppercase letters");
    if (uppercaseCriteria == true) {
      characterPool = characterPool.concat(uppercaseCharacters);
    }
  numericCriteria = confirm("Do you want your password to have numbers? Select 'Cancel' to exclude numbers");
    if (numericCriteria == true) {
      characterPool = characterPool.concat(numberCharacters);
    }
  specialCriteria = confirm("Do you want your password to have special characters? Select 'Cancel' to exclude special characters");
    if (specialCriteria == true) {
      characterPool = characterPool.concat(symbolCharacters);
    }
}

// function will generate the password - referenced from stackoverflow.com - user "nicael"
// function will also validate password if all criteria were selected
function generatePassword () {
  if (lowercaseCriteria === true && uppercaseCriteria === true && numericCriteria === true && specialCriteria === true && (checkPassword === undefined || checkPassword === false )) {
    while (checkPassword === false || checkPassword ===undefined ) {
      blankpassword = "";
      for (var i=0; i < passwordLength; i++) {
        blankpassword += characterPool[Math.floor(Math.random() * characterPool.length)];
      }
      checkPassword = blankpassword.includes(
        ("a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||"s"||"t"||"u"||"v"||"w"||"x"||"y"||"z") 
        && ("A"||"B"||"C"||"D"||"E"||"F"||"G"||"H"||"I"||"J"||"K"||"L"||"M"||"N"||"O"||"P"||"Q"||"R"||"S"||"T"||"U"||"V"||"W"||"X"||"Y"||"Z") 
        && ("0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9") 
        && ("!"||"#"||"$"||"%"||"&"||"?"||"¿")
        );
    }
    return checkPassword
  }
  else {
    blankpassword = "";
      for (var i=0; i < passwordLength; i++) {
        blankpassword += characterPool[Math.floor(Math.random() * characterPool.length)];
      }
    }
  return blankpassword;
}

// function types generated password in the corresponding HTML element, and resets certain variables
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  characterPool = "";
  checkPassword = undefined
}

// Event listener for generator button - click and the cascade of functions start executing
generateBtn.addEventListener("click", executeGenerator);