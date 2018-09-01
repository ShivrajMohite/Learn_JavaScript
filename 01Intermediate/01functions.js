let sayHello = function (name){
    console.log("Greeting message for user");
    console.log(`Hey ${name}`);

}

//sayHello('Jhon')

let fullNameMaker = function(firstname, lastname){
    console.log("Welcome to Home");
    console.log(`Happy to have you, ${firstname} ${lastname}`);

}

// fullNameMaker('Shivraj','Mohite')

let myAdder = function(num1 , num2){
    let added = num1 + num2
    return added

}

// console.log(myAdder(4,5));

let myMultiplier = function (num1 , num2){
    return num1*num2
}

let guestUser = function(name, courseCount){
    return 'Hello ' + name + ' and your course count is: ' + courseCount
}

console.log(guestUser());