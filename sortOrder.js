const argumentWord1 = process.argv[2];
const argumentWord2 = process.argv[3];


compareWords(argumentWord1, argumentWord2);

function compareWords(arg1, arg2){

    var lowarg1 = arg1.toLowerCase();
    var lowarg2 = arg2.toLowerCase();

    if (lowarg1 < lowarg2){
        return console.log("-1");
    }
    if (lowarg1 === lowarg2){
        return console.log("0");
    }
    if (lowarg1 > lowarg2){
        return console.log("1");
    }
}