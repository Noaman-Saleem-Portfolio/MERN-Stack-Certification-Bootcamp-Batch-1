// alert("Array + Objects")

// Suppose you now have 3 students
// Student 1 (name="Ali" age=22 cgpa=3.36 city="Lahore")
// Student 2 (name="Nomi" age=33 cgpa=2.36 city="Islamabad")
// Student 3 (name="Hina" age=26 cgpa=1.36 city="Chiniot")

// Stote this data
// You have 3 Options

// option 1) create 3 arrays
let student1 = ["Ali", 22, 3.36, "Lahore"];
let student2 = ["Nomi", 33, 2.36, "Islamabad"];
let student3 = ["Hina", 26, 1.36, "Chiniot"];

// option 2) create 1 array
// let students = [
//     ["Ali", 22, 3.36, "Lahore"],
//      ["Nomi", 33, 2.36, "Islamabad"],
//      ["Hina", 26, 1.36, "Chiniot"]
// ]

// option 3) create array of objects
let students = [
  {
    name: "ALi",
    age: 22,
    cgpa: 3.36,
    city: "Lahore",
  },
  {
    name: "Nomi",
    age: 33,
    cgpa: 2.36,
    city: "Islamabad",
  },
  {
    name: "Hina",
    age: 26,
    cgpa: 1.36,
    city: "Chiniot",
  },
];


// Challange
// 1) Store a student data
    // name="Ali" 
    // age=22 
    // marks=(midterm=45, finalterm=87) 
    // hobbies=("reading","swimming","reading")

    // 2) Store a E-commerce website shopping Cart Data
        // cart can have multiple products
        // Each product has data = brandNmae, price, expiryDate
