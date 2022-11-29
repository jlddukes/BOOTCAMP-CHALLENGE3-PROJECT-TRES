var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']
//above are my array of values with set the bounds for the random generated password

var emptyarray = []

var generateBtn = document.querySelector("#generate");  //this function creates the button to start the process

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    alert('This is your prompt! To generate a secure password please answer the following questions.'); //this prompt the user that the process is about to start

var char = prompt('Please confirm the number of unique characters that you would like.');
console.log(char , "char")
console.log("hello world")
if (char >= 8 && char <= 128){
alert("Good choice.")  //this if funtion lets the user know that thir chosen value is within range
} else {
    alert("Too many or not enough characters.")
    return alert("Please try again"); //The return function will deploy if numerical data is not met
}

var uppercaseOption = confirm('If you would like uppercase characters press (OK?)'); //Confirming user for uppercase letters

console.log(uppercaseOption)

var lowercaseOption = confirm('If you would like lowercase characters press (OK?)'); //confirming user for lowercase letters

console.log(lowercaseOption)

var numericOption = confirm('If you would like numeric characters press (OK?)'); //confirming user for numbers

console.log(numericOption)

var specialcharOption = confirm('If you would like special characters press (OK?)'); //confirming user for special values

console.log(specialcharOption)

if (uppercaseOption) {  //this function prompts the uppercase command
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + uppercase
    console.log(emptyarray, 'after');
}

if (lowercaseOption) {  //this function prompts the lowercase command
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + lowercase
    console.log(emptyarray, 'after');
}

if (numericOption) {   //this function prompts the numeric command
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + numbers
    console.log(emptyarray, 'after');
}

if (specialcharOption) {   //this function prompts the special characters command
    console.log(emptyarray, 'before');
    emptyarray = emptyarray + special
    console.log(emptyarray, 'after');
}



var completearray = []   // this complete array is used to combine all the information chosen to create the password

for (let index = 0; index < char; index++) {
    var random = Math.floor(Math.random() * emptyarray.length);

    completearray.push(emptyarray[random]);
    console.log(completearray)
    
}  //this for loop joins together combined information to loop into randomized selection

return completearray.join('')


} 









// UNUSED CODE

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