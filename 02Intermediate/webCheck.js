let userEmail = 'shivrajmohite123'
let password = '1234'

// console.log(password.length);
// console.log(userEmail.toLowerCase);

let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
        
    } 
        return false

}

// console.log(userChecker(userEmail));

let passCheckr = function(pass){
    if ((pass.includes(1234)) && (pass.length > 8)) {
        return true
        
    } 
        return false
}