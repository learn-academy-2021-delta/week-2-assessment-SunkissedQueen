// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Red Green Refactor
  //Write the test code using describe, test, expect and watch it fail
  //Write the code that makes the test pass switching to a declared function and using correct parameters
  //Refactor into usable code by cleaning up extra variable and console.log tags

// a) Create a test with expect statements for each of the variables provided.
// Arrange, Act, Assert – setup the testing objects and prepare the prerequisites for the test.

// a describe method that names the function for the test.
 describe("divThree", () => {
   // a test method nested within the describe block that describes what the function does.
   test("Should determine whether or not a given number is divisible by three and return the result using string interpolation", () => {
       //an expect method nested within the test block, calling on the function, followed by the .toEqual() matcher that checks the expected output of the return.
       expect(divThree(15)).toEqual("15 is divisible by three")
       expect(divThree(0)).toEqual("0 is divisible by three")
       expect(divThree(-7)).toEqual("-7 is not divisible by three")
   });
 });
// //SPLENDEFEROUS RED...Yes, my code is failing in the test suites and tests and received the red fail banner.
 var num1 = 15
// // Expected output: "15 is divisible by three"
 var num2 = 0
// // Expected output: "0 is divisible by three"
 var num3 = -7
// // Expected output: "-7 is not divisible by three"
//
//
// // b) Create the function that makes the test pass.
// // - Solve the coding issues by declaring parameters and proper conditions
// // - use string interpolation in the return
// // - make the test pass
 //Function that takes in a number
 const divThree = (a) => {
   //make a conditional statements for what to return if the number is divisible by 3 and catchall if not
      if (a%3 === 0) {
        return `${a} is divisible by three`
      }; {
        return `${a} is not divisible by three`
    };
}
// //Silent moment for the brain cells that wouldn't quit...MINTY GREEN...Yes, my code got the green pass banner.
// //I feel that the code is general and dynamic enough as is. Is there anything else I should do?
 console.log(divThree(num1))
 console.log(divThree(num2))
 console.log(divThree(num3))
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
  // Red Green Refactor
  //Write the test code using describe, test, expect that takes in an array and capitalizes it and watch the code fail
  //Write the code that makes the test pass switching to a declared function and using correct parameters
  //Refactor into usable code by cleaning up extra variable and console.log tags
// a) Create a test with expect statements for each of the variables provided.
    //Use a describe method that inludes the name of the function
    describe("capArray", () => {
      //use test method that describes what the function does to the array
      test("returns an array in capitalized words", () => {
        //use expect method that calls on the capArray() function followed by the .toEqual matcher
        expect(capArray("streetlamp", "potato", "teeth", "conclusion", "nephew")).toEqual(capArray("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"));
        expect(capArray("temperature", "database", "chopsticks", "mango", "deduction")).toEqual(capArray("Temperature", "Database", "Chopsticks", "Mango", "Deduction"))
      })
    })
    //Whew, after that long trail and error with the first jesting, this SPLENDEFEROUS RED failure came quicker.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the capArray function that makes the test pass.
    //Declare the function that takes in the 5 given elements of the array
    const capArray = ([b, c, d, e, f]) => {
      //set conditions that will allow each element in array to be capitalized. I had to search how to capitalize the first letter in each element of an array because we have graduated to higher functions so I understand that map iterates the request to capitalize the first letter of each element. To me the request is the g(). I saw that it worked by testing it in the console and was relieved but I cannot explain it.
      var capitalized = [b, c, d, e, f].map(g => g.charAt(0).toUpperCase() + g.slice(1));
      //return an array with the first letter in each element capitalized
      return capitalized
    }
//I bowed to the jester and had to use a I believe and verify it is true style of getting a solution. I think I will propose to google because it has been so supportive for this portion of the assessment as well as the class notes. MINT GREEN has resurfaced for this question.
    console.log(capArray(randomNouns1))
    console.log(capArray(randomNouns2))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
  // Red Green Refactor
  //Write the test code using describe, test, expect that takes in a string and outputs the index of the first vowel and watch the code fail
  //Write the code that makes the test pass switching to a declared function and using correct parameters
  //Refactor into usable code by cleaning up extra variable and console.log tags

// a) Create a test with expect statements for each of the variables provided.
    //Use a describe method that inludes the name of the function
    describe("heyVowel", () => {
      //use test method that describes what the function does to the string
      test("determines if a character is a vowel and returns the index of the first vowel", () => {
        //use expect method that calls on the capArray() function followed by the .toEqual matcher
        expect(heyVowel("learn")).toEqual(1);
        expect(heyVowel("academy")).toEqual(0);
        expect(heyVowel("challenges")).toEqual(2);
      })
    })
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



// b) Create the function that makes the test pass.
  //Declare the function as heyVowel
  // This was a brainstorm that felt like a tsunami on my brain cells. I knew I wanted to split the letters. Then I had to searched for a way to approach the array. I used the search with Regex. I tried the char of and index methods which made me forget how to spell my name. I was not sure how to isolate the first occurrence of a vowel using this code so I started researching other approaches that I could understand with my current knowledge.
  //const heyVowel = (h) => {
  //   var vowel = h.split("");
  //   //return an array with the first letter in each element capitalized
  //   return vowel.indexOf("a")
  //   //condition that will allow the function to determine if a character is a vowel in a string
  //   if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
  //     return string.indexOf(h)
  //   }
  // }
  //After many videos and trail/error, I decided to use some vintage tactics. I am sure that the approach can be condensed, but I needed a win after all those hours. I will research and consolidate this function that received a MINTY GREEN banner. I think I can incorporate the map method for iteration. Now that I look at it. I might be able to merge some aspects of this function with the previous one. Telling myself to chill and complete the rest of the assessment. How do you make yourself release a project?
  //Here's the pseudocode.
  //Declare the heyVowel function that will take in a string parameter
  const heyVowel = (h) => {
    //Need to ensure the string would be in lowercase so I wouldn't receive error messages from capital letters.
    let str = h;
    str = str.toLowerCase();
    //need to iterate across string
    for(var i = 0; i<str.length; i++) {
      //declare the variable that will be compare to the vowel
  	   let chr = str.charAt(i);
       //use conditional statements with Boolean to test if character is a vowel
  	    if(chr == "a" || chr == "e" || chr == "i" || chr == "o" || chr  == "u")
        //need to stop function at its first occurrence of a vowel. Time to research how to stop a function. Taking a break is a wonderous thing.
         {break};
    }
    //now what to say at different conditions. If the search came back before searching the whole string, then a vowel was found and the index will be displayed.
    if(i<str.length) {
  	   return  (i)}
       //if not, then catchall will display the lack of a vowel in the word.
       else {
         return 'Oh my! You seemed to have lost your vowels.'
       }
  }

console.log(heyVowel(vowelTester1))
console.log(heyVowel(vowelTester2))
console.log(heyVowel(vowelTester3))
