const student={
    name:"Nandhu",
    Course:"Full Stack Developer",
    duration:"10 months",
    rollnum:112304

};

/*We can acess properties using [] square bracket or dot operator*/
console.log(student.name);
console.log(student['name']);

//Dynamically add object to an existing object

student.fees = 200000;

console.log(student);
/*
Nandhu
Nandhu
{
  name: 'Nandhu',
  Course: 'Full Stack Developer',
  duration: '10 months',
  rollnum: 112304,
  fees: 200000
}*/