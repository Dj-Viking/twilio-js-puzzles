//FREIGHT CHALLENGE 1
//// [1][3] 

//FREIGHT CHALLENGE 2
//// [3][4] 

//FREIGHT CHALLENEGE 3
// [2][5] 

//FREIGHT CHALLENGE 4
//[3][4] 

//freight  challenge 5
//[0][4] 

//frieght challenge 6
//[0][2] 

//infinite loop password
// [1][3][3][4][2][5][3][4][0][4][0][2]
//F!N!TE

function scanAndFilter(freightItems, forbiddenString) {
    // This is an array variable you can override with your filtered array
    let filteredItems = [];
  
    /*
    Replace this comment with your code.
    Use the array filter() function to replace filteredItems with a new array of
    strings that don't include the value of forbiddenString
    */
   freightItems.filter(function(item, index, array) {
    console.log(`${item} at ${index} is in ${array}`)
    // if true item is pushed to results and the iteration continues
    if (item != forbiddenString){
      filteredItems.push(item);
    }
    console.log(forbiddenString)
    // returns empty array if nothing found
  });


    return filteredItems;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const filtered = scanAndFilter(
    ['dog', 'ray guns', 'cat', 'zippers', 'ray guns'],
    'ray guns'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']