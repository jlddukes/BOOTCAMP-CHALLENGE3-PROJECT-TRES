var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']

var emptyarray = []

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

function generatePassword() {
    alert('This is your prompt! To generate a secure password please answer the following questions.');

var char = prompt('Please confirm the number of unique characters that you would like.');
console.log(char , "char")
console.log("hello world")
if (char >= 8 && char <= 128){
alert("Good choice.")
} else {
    alert("Too many or not enough characters.")
    return alert("Please try again"); //
}

var uppercaseOption = confirm('Do you want uppercase characters(OK?)'); //change wording later

console.log(uppercaseOption)

var lowercaseOption = confirm('Do you want lowercase characters(OK?)'); //change wording later

console.log(lowercaseOption)

var numericOption = confirm('Do you want numeric characters(OK?)'); //change wording later

console.log(numericOption)

var specialcharOption = confirm('Do you want special characters(OK?)'); //change wording later

console.log(specialcharOption)

if (uppercaseOption) {
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + uppercase
    console.log(emptyarray, 'after');
}

if (lowercaseOption) {
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + lowercase
    console.log(emptyarray, 'after');
}

if (numericOption) {
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + numbers
    console.log(emptyarray, 'after');
}

if (specialcharOption) {
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + special
    console.log(emptyarray, 'after');
}



var completearray = []

for (let index = 0; index < char; index++) {
    var random = Math.floor(Math.random() * emptyarray.length);

    completearray.push(emptyarray[random]);
    console.log(completearray)
    
}

return completearray.join('')





// var password = document.getElementById("password");

// function gp() {

//     var chars = "012abc";
//     var length = 8;
//     var password = "";

//     for (let index = 0; index < length; index++) {
//         var randomNumber = Math.floor(Math.random() * chars.length);
//         password +=chars.substring(randomNumber, randomNumber +1);
//     }
//     document.getElementById("password").value = password;
// }







// if (char < 8 || char > 128)
// alert("Too many or not enough characters.")
} 