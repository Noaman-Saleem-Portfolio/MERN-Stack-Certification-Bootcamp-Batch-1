// alert("Objects")

// Store a student's following info
// name="Ali" age=22 cgpa=3.36 city="Lahore"

// Solutions
// 1)   4 different variables
// 2)   A array having student's data 
//          let student = ["Ali", 22, 3.36 "Lahore"]
// 3)   Use object to store student data

// 1)   4 different variables
// let name="Ali" 
// let age=22 
// let cgpa=3.36 
// let city="Lahore"

// 2)   A array having student's data 
// let student = ["Ali", 22, 3.36, "Lahore"]

// console.log(`Student :`);
// console.log(`Name = ${student[0]}`);
// console.log(`Age = ${student[1]}`);
// console.log(`CGPA = ${student[2]}`);
// console.log(`City = ${student[3]}`);


// 3)   Use object to store student data
let student = {
    name:"ALi",
    age:22,
    cgpa:3.36,
    city:"Lahore"
}

console.log(`Student :`);
console.log(`Name = ${student.name}`);
console.log(`Age = ${student.age}`);
console.log(`CGPA = ${student.cgpa}`);
console.log(`City = ${student.city}`);
