
class Materializer {
    constructor(targetName) {
        //implied
        //let this = {};

      // your code here
        this.target = targetName;
        console.log(targetName);
        console.log(this);
        this.activated = false;
    }

    activate(){
        this.activated = true;
    }

    materialize(){
        if (!this.activated){
            return undefined
        } else {
            this.activate();
            return this.target;
        }
    }
}
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
   const m = new Materializer('Kevin');
   console.log(m.activated); // would print "false"
  
   m.activate();
   console.log(m.activated); // would print "true"
  
   console.log(m.materialize()); // would print "Kevin"