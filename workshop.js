//Question 1 Only Odds
//create an array with the list of random numbers given.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//filter out the odd numbers with the remainder operator. if the remainder of dividing by 2 is not zero
const odds = numbers.filter((num) => num % 2 > 0);
console.log (odds)






//Question 2 Vowel Vs Consonant
//Write an alogorithm that prints how many vowels and how many consonants the word has
//first step is to assign the array and the initial counts for vowels and consonants
const array = "bryan";
let vowelCount = 0;
let consCount = 0;
//then, startin and the 1st index, which is 0 in computer science, check each if each index is a vowel. If it is add to the vowel count. If it is not a vowel, add that index to the consonant count.
for(let i = 0; i < array.length; i++) {
	if(array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u")
	vowelCount++;
	else{consCount++}
}
//then console.log the expected result using the variables so that it fills in for whatever word you assign to the array.
console.log(array +  " has " + consCount + " consonants and " + vowelCount + " vowels")





//Question 3 Reverse Array
//write an algorithm that creates a new array in reverse order
//First step is to define the array
const forwardArray = [1, 2, 3]
const reverseArray =[]
//Then assign a second blank arrray. use a for statement or a while statement to switch the order of the indexes. maybe use array.length - 1 then - 2, then fill it into the second array.
for(let i = forwardArray.length - 1; i >= 0; i--){
	reverseArray.push(forwardArray[i])
  };
  console.log(reverseArray)





  //Question 4 FizzBuzz
  //Write an alorithm that prints each number from 1 to 100 on a new line. For each multiple of 3 print "Fizz" instead of the number. For each multiple of 5, print "Buzz" instead of the nubmer. For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

  //assign a blank array

  //I need to check if each number, from 1 to 100, is a multiple of 3
  //or 5
  // or both with separate checks.
  //make sure to print each number or the fizz buzz stuff
  //don't forget to stop the loop @ 100

  const fizzBuzz = []
  for (let i = 1; i <= 100; i++){
	if (i % 5 === 0 &&  i % 3 === 0){
		console.log("FizzBuzz")
	}
	else if (i % 3 === 0){
		console.log("Fizz")
	}
	else if (i % 5 === 0){
		console.log("Buzz")
	}

	else {
		console.log(i)
	}
}
