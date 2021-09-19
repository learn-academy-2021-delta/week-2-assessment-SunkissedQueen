// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
 console.log(cohort.split(""))

// a) Your answer: ['D', 'e','l', 't', 'a', '2', '0', '2', '1']
// b) Verify and explain: Output ----> ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1'] My favorite method! My brain always try to find a way to incorporate this builtin method. The split() method is helpful with turning a string into an array. This method will not permanently change the original array. The output of the characters within the array is impacted by if spaces or quotation marks are within the parenthesis. In the case of .split(""), string will become an array of letters and numbers separated by spaces and commas.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: Output ----> undefined. Oh, the trickery! Because a function is indicated, a return method needs to be included or undefined will be the output. Return holds a description of the output of executed code (function).


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: Output ----> [8, 10, 12, 14, 16]  .map() method allows a function to be iterated across an array. The output will be the same length as the original array and will be updated with the executed code of the function. The updated array on this problem multiplied each value of the previous array by two.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
 console.log(oddsOnly)

// a) Your answer:[12, 14]
// b) Verify and explain: Output ----> [12, 14] The function is requesting that the even numbers be displayed. I would recommend that the variable be renamed to correlate to the expected output or the modolu be changed to produce odd numbers only (value%2 !== 0)) as indicated by the variable declaration...unless the goal is to irritate/prank the user then nothing should be changed. 


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: class Learn, student: "George", cohort: "Delta", year: 2021
// b) Verify and explain: Output ----> Learn {student: 'George', cohort: 'Delta', year: 2021} A class is the building block of an object. The class Learn can accept three parameters---student, cohort, and year. Hard values were assigned to cohort and year. When the new information ("George") is introduced, it goes to the student parameter. The output of this class is an object entitled Learn that contains keys and values encapsulated with curly braces.
