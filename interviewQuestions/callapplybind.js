const object1={
    name:"nandhu",
    fees:250000,
    greet:function(school,fee){
        return `( course: ${this.course},school: ${school},fee: ${fee})`;

    }
    
}

const ob2={
    course:"MERN",
}

console.log(object1.greet.call(ob2,'Newton',240000));


console.log(object1.greet.apply(ob2,['newton',235000]));

const newbind = object1.greet.bind(ob2,'Newtonschool',239000);
console.log(newbind());