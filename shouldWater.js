const argumentValue1 = process.argv[2];

const argumentValue2 = process.argv[3];

const numberValue1 = Number(argumentValue1);

const numberValue2 = Number(argumentValue2);

if (numberValue1 === 0 && numberValue2 > 10){
    console.log("WATER");
}