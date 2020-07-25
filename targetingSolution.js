class TargetingSolution {
    constructor(config) {
        //implicit
        //let this = {};

      // your code here
      
      this.numX = config.x;
      this.numY = config.y;
      this.numZ = config.z;
      console.log(this);
    }
    target(){
        return `(${this.numX}, ${this.numY}, ${this.numZ})`;
    }
    // your code here
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new TargetingSolution({x: 10, y: 15, z: 900});

  console.log(m);
  
  console.log(m.target()); // would print "(10, 15, 900)"