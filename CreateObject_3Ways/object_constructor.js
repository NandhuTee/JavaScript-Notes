console.log("Create Object using Object Constructor");


function student(name,rank){
    this.name = name;
    this.rank = rank;
    console.log(this.name);
    console.log(this.rank);

}
const obj1 =new student("Nandhu",10);
/*output
Create Object using Object Constructor
Nandhu
10*/