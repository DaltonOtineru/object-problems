// define a variable for the array of objects
// create a function 

let books = [ 
    
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
 
    ];
    
function compare(a, b){
    let order = 0;
    if(a.title > b.title){
        order = 1;
    } else if(a.title < b.title){
        order = -1;
    }
    return order;
}
    
console.log(books.sort(compare));
      
//returns 
/*
    [[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, 
    [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, 
    [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]
*/


