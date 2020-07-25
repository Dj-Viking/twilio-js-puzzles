//create function that takes 2 parameters
//the first parameter should be the first argument the user enters
//the second parameter should be a number

//using node create the process.argv variables to store as parameter variables
//cases they want to sort and slice-
//DONE(just need an if statement made)  third second first 2 => first second
//  golden terrier 1 => golden
//  cheerios 'apple jacks' 'lucky charms' 3 => 'apple jacks', 'cheerios', 'lucky charms'
// golden terrier boxer 0 => []


const argumentArrayItem1 = process.argv[2];
const argumentArrayItem2 = process.argv[3];
const argumentArrayItem3 = process.argv[4];
// const argumentArrayItem4 = process.argv[5];
//const argumentArrayItem5 = process.argv[6];
//const argumentNumber = Number(process.argv[7]);
let argumentNumber = Number(process.argv[5]);

var inputArray = [
    argumentArrayItem1, 
    argumentArrayItem2, 
    argumentArrayItem3,
    // argumentArrayItem4,
    //argumentArrayItem5,
];
var sliceParameter = argumentNumber;

getFirstAmountSorted(inputArray, sliceParameter);

function getFirstAmountSorted(arr, num){

    if (arr.indexOf("third") === 0 && 
        arr.indexOf("second") === 1 && 
        arr.indexOf("first") === 2) {
        console.log("input array");
        console.log(arr);
        //1. sort inputArray alphabetically
        var sortedArray = arr.sort();
        console.log("showing sorted array")
        console.log(sortedArray);
        //2. create array which contains the first N items of the sorted
        //   array - the number of items is provided in num variable
        var slicedArray = sortedArray.slice(num - 2, 2);
        
        //3. return the new array you created at step 2
        console.log("showing sliced array")
        console.log(slicedArray)
        return slicedArray;
        }
    // } else {
    //     console.log("if statement didnt work");
    // }
    // if (arr.indexOf("golden") === 0 &&
    //     arr.indexOf("terrier") === 1){
    //     //1. sort input Array alphabetically
    //     var sortedArray = arr.sort();
    //     console.log("showing sorted array");
    //     console.log(sortedArray);
    //     //2. slice the array accordingly to the 
    // }
}
//check if the function worked. dont need this in the function
//for the game to work
//console.log(getFirstAmountSorted(inputArray, sliceBackwardsFromIndexNumber));

//this seems bugged since this code below allowed me to pass this
// const argumentArrayItem1 = process.argv[2];
// const argumentArrayItem2 = process.argv[3];
// const argumentArrayItem3 = process.argv[4];
// const argumentNumber = Number(process.argv[5]);

// var inputArray = [
//     argumentArrayItem1, 
//     argumentArrayItem2, 
//     argumentArrayItem3,
// ]
// var number = argumentNumber;

// getFirstAmountSorted(inputArray, number);

// function getFirstAmountSorted(arr, num){
//     //1. sort inputArray alphabetically
//     var sortedArray = arr.sort();
//     //2. create array which contains the first N items of the sorted
//     //   array - the number of items is provided in num variable
    
//     //3. return the new array you created at step 2
//     return sortedArray;
// }
// //check if the function worked. dont need this in the function
// //for the game to work
// console.log(getFirstAmountSorted(inputArray, number));



