/* PASSWORD GENERATOR */

// Function for password prompts
function generatePassword(){

  let password = "";

  // Password length prompt
  let caseLength = Number(prompt("How many characters would you like in your password?"));
  while (isNaN(caseLength) || caseLength < 8 || caseLength > 128) caseLength=Number(prompt("caseLength must be between 8 - 128 characters. How many characters would you like in your password?"));
  console.log (caseLength);


  // Created character arrays
  let caseArray=[];
  let upperChar = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
  let lowerChar = ["qwertyuiopasdfghjklzxcvbnm"];
  let numberChar = ["1234567890"];
  let specialChar = ["!@#$%^&*()_-=+[]{}"];


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


  // Selected character types stored into group array
  if (upper==true, lower==true, numbers==true, special==true){
    caseArray.push(upperChar + lowerChar + numberChar + specialChar);
  }
  console.log(caseArray);


  // Function to turn array into string
  function randomPwd(length) {
    let caseString = String(caseArray)
  console.log(caseString)


  // For loop to choose password characters
  for(var i = 0; i < length; i++){
  password += caseString.charAt(Math.floor(Math.random() * caseLength));
  }
  return password;
  } 


  password = randomPwd(caseLength)
  console.log(password)


  // Add password to display area
  //alert("Your random password is: " + password);
  document.getElementById("password").innerHTML = password;


  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }


  // Add event listener to generate button 
  generateBtn.addEventListener("click", writePassword)
}