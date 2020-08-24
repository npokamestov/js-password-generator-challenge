// Assignment Code
var generateBtn = document.querySelector("#generate");
 if (generateBtn.addEventListener)
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword, false);
 else if (generateBtn.addEventListener)
      generateBtn.addEventListener("onclick", writePassword);
// Write password to the #password input
function writePassword() {
  //local password funcation within the writePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText = password;
}
//generate password based on criteria from prompts
function generatePassword() {
  //prompt to confirm length in terms of numbers only
  var length = Number(prompt("How many characters would you like your password to be? \nLength must be between 8-128 characters"));
  //use prompt to leave generatePassword function
  if (length == "" || length == null) {
    alert("You choose to cancel");
    return;
  }
  //prompt when the number that is entered is outside of the desired range, loop back until in rnage
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  //prompt to confirm character choices
  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var specials = confirm("Would you like to use special characters?");
  //prompt for when no choices are made, loop back until one is made
  while (!uppers && !lowers && !numbers && !specials) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    specials = confirm("Would you like to use special characters?");
  }
  //local password variable within the generatePassword function
  var password = "";
  //variable for string of allowed characters along with random selections where needed
  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (specials) password += rando(allowed.specials = "!@#$%'\"^&*(){}[]=<>/,.");
  //for loop to generate password based on selections of length and character types
  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
  //combine elements and then return value to be written
  //use randoSequence to prevent repititon with allowed password string
  document.querySelector("#password").value = randoSequence(password).join("");
  //console.log(password)
}