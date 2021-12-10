// Assignment code here


//hypothetical variable
var charLength;
//mixture of all criteria
var passMix =[];
//variables for criteria
var lowerChar = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","`","~",];
var numberChar = ["1","2","3","4","5","6","7","8","9","0",]; 





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var gotPrompts = getPrompts();
  var passwordTest = document.querySelector("#password");

  if (gotPrompts) {
    var newPassword = generatePassword();
  if (newPassword === undefined) {
    newPassword = "Password Generator Failed :( Please try again."
  }
  passwordTest.value = newPassword;
  } 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password  ="";
  for (var i = 0; i < charLength; i++) {
      var randomIndex = Math.floor(Math.random() * passMix.length);
      password = password + passMix[randomIndex];
  }
  return password;

}

// fetches the charlength and prompt values for gotPrompts function
function getPrompts(){
    passMix = [];
    charLength = parseInt(prompt("Please enter the number of characters you want your password to be 8-128 characters"));

      if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
        alert("This is not a valid answer. Please select a value between 8-128 characters.");
        return getPrompts()

      }
    
      if (confirm("Do you want 'Lowercase' letters in your password?")) {
        passMix = passMix.concat(lowerChar);
          
      }
        
      if (confirm("Do you want 'Uppercase' letters in your password?")) {
        passMix = passMix.concat(upperChar);
      }

      if (confirm("Do you want 'Special Characters' in your password?")) {
        passMix = passMix.concat(specialChar);
      }

      if (confirm("Do you want 'Numbers' in your password?")) {
        passMix = passMix.concat(numberChar);
      }
      
      if (passMix.length === 0) {
        alert("Please select at least one character type");
        return; // getPrompts()
      }
      return {charLength, passMix}
       
    }
  