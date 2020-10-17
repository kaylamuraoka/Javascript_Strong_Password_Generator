// Global variables declared below to be included in password
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericChar = "0123456789".split("");
var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

// declare

// Reference to "Generate Password" button
var generateBtn = document.querySelector("#generate");

// function to generate strong password according to user's selection
function generatePassword() {
  // ask user how many characters they want in their password
  var passwordLength = prompt(
    "How many characters would you like your password to contain? (min is 8, max is 128"
  );
  // loop prompt if given passwordLength is outside the bounds or null
  while (!(passwordLength >= 8) || !(passwordLength <= 128)) {
    alert(
      "You must choose a valid length of at least 8 characters and no more than 128 characters... Try Again"
    );
    var passwordLength = prompt(
      "How many characters would you like your password to contain? (min is 8, max is 128"
    );
  }
  // Prompt the user for character types to include in their password
  includeLowerCaseChar = confirm(
    "Click OK if you'd like to include lowercase characters?"
  );
  includeUpperCaseChar = confirm(
    "Click OK if you'd like to include uppercase characters?"
  );
  includeNumericChar = confirm(
    "Click OK if you'd like to include any numeric characters?"
  );
  includeSpecialChar = confirm(
    "Click OK if you'd like to include any special characters?"
  );

  // loop until least one character type is selected
  while (
    includeLowerCaseChar === false &&
    includeUpperCaseChar === false &&
    includeNumericChar === false &&
    includeSpecialChar === false
  ) {
    alert("You must choose at least one character type... Try Again");
    includeLowerCaseChar = confirm(
      "Click OK if you'd like to include lowercase characters?"
    );
    includeUpperCaseChar = confirm(
      "Click OK if you'd like to include uppercase characters?"
    );
    includeNumericChar = confirm(
      "Click OK if you'd like to include any numeric characters?"
    );
    includeSpecialChar = confirm(
      "Click OK if you'd like to include any special characters?"
    );
  }
  // declare empty array to hold possible password characters according to the user's selection
  var passwordCharSelection = [];

  if (includeLowerCaseChar) {
    for (var i = 0; i < lowercaseChar.length; i++) {
      passwordCharSelection.push(lowercaseChar[i]);
    }
  }
  if (includeUpperCaseChar) {
    for (var i = 0; i < uppercaseChar.length; i++) {
      passwordCharSelection.push(uppercaseChar[i]);
    }
  }
  if (includeNumericChar) {
    for (var i = 0; i < numericChar.length; i++) {
      passwordCharSelection.push(numericChar[i]);
    }
  }
  if (includeSpecialChar) {
    for (var i = 0; i < specialChar.length; i++) {
      passwordCharSelection.push(specialChar[i]);
    }
  }
  console.log(passwordCharSelection);
  // declare empty string to add characters from the passwordCharSelection array randomly
  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharSelection[
        Math.floor(Math.random() * passwordCharSelection.length)
      ];
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
