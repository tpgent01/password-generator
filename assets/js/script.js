/* GENERATOR FUNCTIONS */

// function for password prompts
function promptMe(){
  // password length prompt
  var length = Number(prompt("How many characters would you like in your password?"));
  while (isNaN(length) || length < 8 || length > 128) length=Number(prompt("Length must be between 8 - 128 characters. How many characters would you like in your password?"));
  console.log (length);

  //password criteria prompts
  var upper = confirm("Would you like uppercase letters?");
  var lower = confirm("Would you like lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var special = confirm("Would you like to use special characters?");
  console.log (upper, lower, numbers, special);
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
