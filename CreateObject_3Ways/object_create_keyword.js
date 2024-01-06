console.log("Create objecct using create keyword\n");

const student ={
    greet:function(){
       return `my name is:${this.name} and my rank is${this.rank}`
       }

};
const object1 =Object.create(student);
object1.name="Nandhu";
object1.rank=10;
console.log(object1.greet());
