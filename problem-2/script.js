let people = [
    {
       firstName: 'Brandon',
       lastName: 'Fritzer',
       age: 28
   },
    {
       firstName: 'Kristina',
       lastName: 'Coronado',
       age: 28
   },
   {
       firstName: 'Dalton',
       lastName: 'Otineru',
       age: 28
   }
]
let names = people.forEach((p) => {
    console.log(`${p.firstName} ${p.lastName}`);
});


const printFullName = people.forEach(function(a) {
    console.log(a.firstName + ' ' + a.lastName)
});