// alert("Loops")

// Three students Ali, Nomi, Hina
// Marks 76, 45, 66

let name=["Ali","Nomi","Hina"]
let marks= [76, 45, 66]

// Can I print Name and Marks of each student
// Ali got 76 marks
// Nomi got 45 marks
// Hina got 66 marks

// console.log(`${name[0]}  got ${marks[0]}`);
// console.log(`${name[1]}  got ${marks[1]}`);
// console.log(`${name[2]}  got ${marks[2]}`);

// Loop
// For Loop --------------> repetitions

// for(let i=0;i < 3; i++){
//     console.log(i);
// }

for(let i=0;i < 3; i++){
    console.log(`${name[i]}  got ${marks[i]}`);
}


// For of Loop
for(let item of name){
    console.log(`Hello ${item}`);
}
