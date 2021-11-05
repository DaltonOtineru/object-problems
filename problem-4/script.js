// create a function that accepts an object and key as parameters
// create an is else statement
// use the hasOwnProperty() method on the object passed through
// if it returns true, "The key exists!"
// if else "The key does not exist!"

const earth = {
    shape: 'round',
    size: 'giant',
    population: '8 billion'
}

function hasKey(obj, key){
    if(obj.hasOwnProperty(key)){
      console.log("The key exists!");
    } else {
      console.log("The key does not exist!");
    }
  }
  
hasKey(earth, "color");
// returns "The key does not exist!"

hasKey(earth, "shape");
// returns "They key exists!"