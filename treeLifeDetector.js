const argumentValue = process.argv[2];

const numberValue = Number(argumentValue);

//if the string entered into the command line is "EXTEND"
//console.log "Extending bridge!"
if (numberValue === 0){
    console.log("alive");
}