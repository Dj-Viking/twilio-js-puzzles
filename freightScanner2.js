// The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  let indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
  console.log('Contraband Indexes: ' + indexes); // should be [1, 4]

  let testIndexes = ['dog', 'contraband', 'cat', 'zippers', 'contraband']

scan(testIndexes);

function scan(freightItems) {
    let contrabandIndexes = [];
  
    
    //Replace this comment with your code.
  
    //Your code needs to:
    //- Loop through every item in the freightItems array
    //- if the item is equal to "contraband", add the current index of the item 
      //to contrabandIndexes - hint: use the array "push()" method
      
      for (let i = 0; i < salaries.length; i++){
        
      }
        freightItems.forEach((item, index, array) => {
            
            console.log(`${item} is at ${index} of ${array}`);
            if (item === "contraband"){
                contrabandIndexes.push(index);
                console.log(contrabandIndexes);
            }

        })
    return contrabandIndexes;
  }
  

//   That did it! You hack the security node, 
//and an index for the second character in the 
//Infinite Loop's master password appears:

// [3][4] 

// This is one of six indexes total you will need to discover the password.
  