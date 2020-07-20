const argumentValue1 = process.argv[2];



const numberValue1 = Number(argumentValue1);



if (numberValue1 === 0){
    console.log("alive");
} 

if (numberValue1 === 1){
    console.log("flowering");
}

if (numberValue1 === 2){
    console.log("shedding");
}

if (numberValue1 != 0 && numberValue1 != 1 && numberValue1 != 2){
    console.log("other");
}

