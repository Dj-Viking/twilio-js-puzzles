const argumentWord1 = process.argv[2];
const argumentWord2 = process.argv[3];

const lowarg1 = argumentWord1.toLowerCase();
const lowarg2 = argumentWord2.toLowerCase();

if (lowarg1 < lowarg2){
    console.log("-1");
}
else if (lowarg1 === lowarg2){
    console.log("0");
}
else if (lowarg1 > lowarg2){
    console.log("1");
}


// compareWords(argumentWord1, argumentWord2);

// function compareWords(arg1, arg2){

//     let lowarg1 = arg1.toLowerCase();
//     console.log(lowarg1);
//     let lowarg2 = arg2.toLowerCase();
//     console.log(lowarg2);

//     if (lowarg1 < lowarg2){
//         return console.log("-1");
//     }
//     if (lowarg1 === lowarg2){
//         return console.log("0");
//     }
//     if (lowarg1 > lowarg2){
//         return console.log("1");
//     }
// }