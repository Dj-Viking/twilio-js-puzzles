const arg1 = process.argv[2];
const arg2 = process.argv[3];
const arg3 = process.argv[4];
let inputArray = [arg1, arg2, arg3];

addFirstToLast(inputArray);

// function addFirstToLast(inputArray){

//     if (inputArray.length === 0){
//             output = "";
//             console.log("");
//             return output;
//     }
//     if (inputArray.length === 1){
//         //if only one argument is entered the last 2 are undefined
//         //we handle this here and locally it works
//         //whatever is entered first is duplicated and concatenated 
//         var output = inputArray[0] + inputArray[0];
//         console.log(output);
//         return output;
//     }
//     if (inputArray.length === 2 /*&& inputArray[2] === undefined*/){
//         /*if arguments are golden terrier should output goldenterrier
//         array is always length of 3 and since we didn't input arg3 it is entered
//         as undefined so we are handling this and it works for me locally
//         but the game says my function returns "undefined" if the test enters golden terrier...*/
//         var output = inputArray[0] + inputArray[1];
//         console.log(output);
//         return output;
//     }
//     if (inputArray.length === 3){
//         //if arguments are first second third
//         //function returns firstthird *game accepts this one
//         var output = inputArray[0] + inputArray[2];
//         console.log(output);
//         return output;
//     } 

// }
//the version above works for the game but not locally
//wat
//the function below only works locally...

function addFirstToLast(inputArray){

    if (inputArray.length === 3 && 
        inputArray[0] === undefined &&
        inputArray[1] === undefined &&
        inputArray[2] === undefined){
            output = "";
            console.log("");
            return output;
    }
    if (inputArray.length === 3 && 
        inputArray[1] === undefined &&
        inputArray[2] === undefined){
        //if only one argument is entered the last 2 are undefined
        //we handle this here and locally it works
        //whatever is entered first is duplicated and concatenated 
        var output = inputArray[0] + inputArray[0];
        console.log(output);
        return output;
    }
    if (inputArray.length === 3 && inputArray[2] === undefined){
        /*if arguments are golden terrier should output goldenterrier
        array is always length of 3 and since we didn't input arg3 it is entered
        as undefined so we are handling this and it works for me locally
        but the game says my function returns "undefined" if the test enters golden terrier...*/
        var output = inputArray[0] + inputArray[1];
        console.log(output);
        return output;
    }
    if (inputArray.length === 3){
        //if arguments are first second third
        //function returns firstthird *game accepts this one
        var output = inputArray[0] + inputArray[2];
        console.log(output);
        return output;
    } 

}