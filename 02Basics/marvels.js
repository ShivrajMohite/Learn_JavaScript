//Datatype - Array

// const superHeroes = ['Iron man', 'Spiderman', 'Capt. America', 'Thor']

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes.length);
// console.log(superHeroes[superHeroes.length -1]);

// console.log(`We have ${superHeroes.length} super heroes`);


const numbers = ['One', 'Two', 'Three', 'Four','Five', 'Six']

// numbers[1] = 'SOMETHING'

// console.log(numbers);

//start

// console.log(numbers.shift()); 
// console.log(numbers);

// numbers.unshift('SOMETHING')
// console.log(numbers);

//end
// console.log("The element to be deleted is :" + numbers.pop());
// console.log(numbers);

// numbers.push('Seven')
// console.log(numbers);


//middle
numbers.splice(2, 2, 'SOMETHING')
console.log(numbers);
