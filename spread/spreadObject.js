/*Spread Operator with Objects:*/
console.log("1.Copying an object:");
const originalObject = {name: "Nandhu",degree:"M.tech"};
const copyObject = {...originalObject};
console.log(copyObject);

console.log("2.Merging Objects:");

const ob1 = {name:"Nandhu",degree:"M.C.A"};
const ob2 = {job :"Assistant Professor"};
const mergedOb = {...ob1,...ob2};
console.log(mergedOb);

console.log("3.Modifying an object while copying:");

const Originalob1 = {name:"Nandhu",degree:"M.C.A"};
const Originalob2 = {job :"Assistant Professor"};
const AfterModifiedOb = {...ob1,...ob2,degree:"M.Tech",Country:"India"};
console.log(AfterModifiedOb);
