const student={
    name:"Nandhu",
    Course:"Full Stack Developer",
    duration:"10 months",
    rollnum:112304

};

/*We can acess properties using [] square bracket or dot operator*/

console.log(student.name);
console.log(student['name']);

/*output
Nandhu
Nandhu
*/
//Looping Through Object Properties:
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
/*output
name: Nandhu
Course: Full Stack Developer
duration: 10 months
rollnum: 112304
*/

/*Using JSON.stringify():JSON.stringify() converts the object to a JSON string, which can then be logged or displayed as a string.*/

const objAsString = JSON.stringify(student);
console.log(objAsString);
/*output
{"name":"Nandhu","Course":"Full Stack Developer","duration":"10 months","rollnum":112304}
*/

/*The map() function in JavaScript is used to iterate over arrays */
// Convert the object into an array of key-value pairs
const entries = Object.entries(student);

// Use map to display the key-value pairs
const display = entries.map(([key, value]) => {
    return `${key}: ${value}`;
});

console.log(display);
/*output
[
  'name: Nandhu',
  'Course: Full Stack Developer',
  'duration: 10 months',
  'rollnum: 112304'
]
*/