function mutate(freightItems) {
    // This is an array variable you can override with your mutated array
    let mutatedItems = [];
  
    /*
    Replace this comment with your code.
    Use the array map() function to replace mutatedItems with a new array of
    strings from the input array that have been converted to ALL CAPS
    */
   console.log("before uppercase");
   console.log(freightItems);
   let uppercaseItems = [];
   //create items as uppercase
    for (let i = 0; i < freightItems.length; i++){
        let upperCaseStr = freightItems[i].toUpperCase();
        //console.log(upperCaseStr);
        uppercaseItems.push(upperCaseStr);
    }
    //check they are uppercase
    console.log("after uppercase");
    console.log(uppercaseItems);

    mutatedItems = uppercaseItems;
    
  
    return mutatedItems;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const mutated = mutate(['apples', 'ray guns', 'oranges']);
  console.log('Mutated Items');
  console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']