//JSON.parse() method to convert JSON text (string) into a JavaScript object.

const jsonString = '{"name": "John", "age": 30}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Output: John
