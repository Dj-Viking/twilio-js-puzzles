const ducktypiumColor = process.argv[2];
console.log(process.argv[0]);
console.log(process.argv[1]);



class Ducktypium {
    constructor(color) {
      // your constructor object here
        //implicit
        //this = {};

        //console.log(this.color);
        
        let error = new Error("color must be red blue or yellow");

        if (color === "red" || color === "blue" || color === "yellow"){
            this.color = color;
        } else {
            throw error.message;
        }
        this.calibrationSequence = [];
      
    }
    // your methods here
    refract(refractColor){
        let error = new Error("there was an error");
        if (refractColor === "red" || refractColor === "blue" || refractColor === "yellow"){
            this.refractColor = refractColor;
        } else {
            throw error.message;
        }
        console.log("constructor color: " + this.color);
        console.log("refract color: " + this.refractColor);
        if (this.refractColor === this.color){
            return this.color;
        } else if (this.refractColor === "red" && this.color === "blue" || 
                   this.refractColor === "blue" && this.color === "red"){
            this.refractColor = "purple";
            return this.refractColor;
        } else if (this.refractColor === "yellow" && this.color === "red" || 
                   this.refractColor === "red" && this.color === "yellow"){
            this.refractColor = "orange";
            return this.refractColor;
        } else if (this.refractColor === "blue" && this.color === "yellow" ||
                   this.refractColor === "yellow" && this.color === "blue"){
            this.refractColor = "green";
            return this.refractColor;
        } 
    }

    calibrate(arr){
        let sortedArr = arr.sort();
        console.log(sortedArr);
    
        for (let i = 0; i < sortedArr.length; i++){
            let multNum = sortedArr[i] * 3;
            this.calibrationSequence.push(multNum);
        }
        return this.calibrationSequence;
    }
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const dt = new Ducktypium(ducktypiumColor);
  
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('red')); // prints 'purple'
  console.log(dt.refract('yellow')); // prints 'orange'
  console.log(dt.refract("blue")); // prints "green"
  //console.log(dt.refract("pwiepajf")); //throws error
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]