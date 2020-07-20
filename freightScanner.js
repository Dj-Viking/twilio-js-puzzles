



const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);

scan(numItems);

console.log('Number of "contraband": ' + numItems); // should be 2

function scan(freightItems) {
    let contrabandCount = 0;
  
    
    //Replace this comment with your code.
  
    //Your code needs to:
    //- Loop through every item in the freightItems array
    //- if the item is equal to "contraband", increase contrabandCount by one
    for (let i = 0; i < freightItems.length; i++){

          let contrabandArray = freightItems[i];

          if(contrabandArray.includes("contraband")){
            contrabandCount++
          }
    }
    return contrabandCount;
  }


//   That did it! You hack the security node, 
//and an index for the first character in the 
//Infinite Loop's master password appears:

// [1][3] 

// This is one of six indexes total you will need to discover the password.
