// create a function that accepts an object and key as parameters
// define a variable equal to the oobj and hasOwnProperty method
// return the variable

const earth = {
  shape: 'round',
  size: 'giant',
  population: '8 billion'
}

function hasKey(obj, key){
 const doesItHaveKey = obj.hasOwnProperty(key)
 return doesItHaveKey;
  
}
console.log(hasKey(earth, "color")); // false
console.log(hasKey(earth, "shape")); // true