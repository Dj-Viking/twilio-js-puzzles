 const numberInput = Number(process.argv[2]);

verifyInput(numberInput);

function verifyInput(argv){

    let output = "";

    if (argv % 0){
        output = "";
        output += "JavaScript";
        return console.log(output);
    }
    if (argv % 3 === 0 && argv % 5 != 0){
        output = "";
        output += "Java";
        return console.log(output);
    } 
    if (argv % 5 === 0 && argv % 3 != 0){
        output = "";
        output += "Script";  
        return console.log(output);
    } 
    if (argv % 3 === 0 && argv % 5 === 0){  
        output = "";
        output += "JavaScript";
        return console.log(output);
    } 
    if (argv % 3 != 0 || argv % 5 != 0 || argv === 0){
        return console.log(argv);
    }
}

//no arguments put parenthesis 
//with arguments just put them between = arg1, arg2, arg3 =>
// const fizzbuzz = () => {
//     for (let i = 0; i < 101; i++){
//         if (i % 3 === 0) console.log('fizz')
//         else if (i % 5 === 0) console.log('buzz')
//         else if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz')
//         else if (i % 15 === 0)//this is the same as the line above???
//         else console.log(i)
//     }
// }

// fizzbuzz();


