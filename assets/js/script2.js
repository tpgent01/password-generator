/* PASSWORD GENERATOR FUNCTIONS */

// Function for password prompts
function generatePassword(){

// password length prompt
  let length = Number(prompt("How many characters would you like in your password?"));
  while (isNaN(length) || length < 8 || length > 128) length=Number(prompt("Length must be between 8 - 128 characters. How many characters would you like in your password?"));
  console.log (length);

//possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = "";

// Password criteria prompts
let upper = confirm("Would you like uppercase letters?");
let lower = confirm("Would you like lowercase letters?");
let numbers = confirm("Would you like to use numbers?");
let special = confirm("Would you like to use special characters?");
console.log (upper, lower, numbers, special);


// Checks if user criteria is valid
while (!upper && !lower && !numbers && !special) {
alert("You must selected at least one character type.");
    upper = confirm("Would you like uppercase letters?");
    lower = confirm("Would you like lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    special = confirm("Would you like to use special characters?");
    console.log (upper, lower, numbers, special);
}
    
//create for loop to choose password characters
//for(var i = 0; i <= ; i++){
//}

// add password to display area







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);}