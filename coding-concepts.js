// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: ['D', 'e','l', 't', 'a', '2', '0', '2', '1']
// b) Verify and explain: The split() method turns a string into an array. Each character in the string become separate characters within an array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: String interpolation allows a value to be included within a sentence. This value will be received outside of the function.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain: .map() method allows a function to be iterated across an array.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer:[12, 14]
// b) Verify and explain: The function is requesting that the even numbers be displayed. To get odd value%2 !== 0.


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
// b) Verify and explain: Output ----> Learn {student: 'George', cohort: 'Delta', year: 2021} A class is a
