function construct(name) {
    let person = {};

    console.log(name);
    person.name = name;
    console.log(person);
    person.material = 'human';
    console.log(person);
    person.assemble = true;
    console.log(person);
    person.duration = 1000;
    console.log(person);
    
    return person;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const somePerson = construct('Kevin');
  console.log('name is: ' + somePerson.name); // should be "Kevin"
  console.log('duration is: ' + somePerson.duration); // should be 1000