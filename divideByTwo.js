//the line of code below reads in the value of the argument passed in after
//the name of your script
//the command line reads node filename.js argument as if its an array
//we just want to do our work on the argument which as the index value of 2
//or the 3rd item in the array since arrays start at [0, 1, 2] etc.

const argumentValue = process.argv[2];

//this line of code converts the argument to a numeric value
const numberValue = Number(argumentValue);

//this line divides the input number by two, and stores the result in
//a variable named "result"
const result = numberValue / 2;

//need to finish this line...ok..how could i print out the result
//to the terminal window without hardcoding the number 200?
console.log(numberValue / 2);


//laser password is "PEW PEW PEW!"


//console.log(process.argv);
//type in terminal> node divideByTwo argument returns this into the terminal
// [
//     '/usr/local/bin/node',
//     '/Users/andersackerman/twilioquest/js/divideByTwo.js',
//     'one'
// ]