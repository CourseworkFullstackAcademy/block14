/* const cars = ['Honda', 'Toyota', 'Ford', 'Subaru']
cars.pop()
cars.shift(1)
console.log(cars)
cars.push(`Audi`)
cars.unshift(`Hyundai`)
console.log(cars)
cars.splice(2, 0, `Mercedes`)
console.log(cars) */

//count the number of e's in the sentence.

//assign the variable
//run through each character in the string
//at each character, or i, determine whether it is an e or not
//count the number of times e was looped through
const sentence = "There once was a donkey named Eeyore.";
let count = 0
for(let i = 0; i < sentence.length; i++) {
		if(sentence[i] === "e" || sentence[i] === "E")
		count++;
	}
console.log(count)



