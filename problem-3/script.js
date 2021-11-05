
// Create an object 
// define a function that accepts an object as a parameter
// define a variable that represents the amount of keys in the object
// return the variable

const trump = {
    color: 'orange',
    size: 'thicc',
    brain: 'peanut'
}
function howMany(obj){
    let objLength =  Object.keys(obj).length;
    return objLength;
}
// console.log(howMany(trump));
// 3