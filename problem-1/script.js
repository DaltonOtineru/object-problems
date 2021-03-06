// Define an object that represents a person & info about them;
// create a function that accepts two parameters, an object and a key;
// inside the function use the delete method to delete whichever key is passed 
// in as a parameter;
// return the updated object

const person = {
    firstName: 'Dalton',
    lastName: 'Otineru',
    age: 28,
    eyes: 'blue';
}
function objDelete(obj, key){
    delete obj[key];
    return obj;
}
/*
console.log(objDelete(person, 'lastName'));
returns => 
[object Object] {
  age: 28,
  eyes: "blue",
  firstName: "Dalton"
}
*/