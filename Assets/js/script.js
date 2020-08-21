// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt user to select criteria and store as variables
do{
    var passwordLength = parseInt(window.prompt("How long do you want your password to be? \n Please choose a number between 8 and 128."), 10);
}while(isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);

var upper = window.confirm("Include UPPERCASE letters?");
var lower = window.confirm("Include lowercase letters?");
var numeric = window.confirm("Include numbers?");
var special = window.confirm("Include special characters?");

console.log(passwordLength);
console.log(upper);
console.log(lower);
console.log(numeric);
console.log(special);

var choices = [
         /* 0 */["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
         /* 1 */["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
         /* 2 */[0,1,2,3,4,5,6,7,8,9],
         /* 3 */['!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
              ];

//if all true, then random number for both choices[x][y] (0 <= x < 4) and (0 <= y < choices[x].length).

//if
passwordPrint = [];
for (var i = 0; i < passwordLength; i++){
  var x = Math.floor(Math.random() *4);

  console.log(choices[x][Math.floor(Math.random() *choices[x].length)]);
  passwordPrint[i] = choices[x][Math.floor(Math.random() *choices[x].length)];
}