// Print something
console.log("Heyyy! Writing nodejs");

// ======================== COnditions
let age =20;

// if condition
if(age > 18) {
    console.log("You can drink");
}

// If else
if(age > 18) {
    console.log("You can drink");
}
else {
    console.log("You cannot drink");
}

// if else-if
if(age > 18) {
    console.log("You can drink");
}
else if(age >12) {
    console.log("You can have juice");
}
else {
    console.log("You can only have juice")
}

// ======================= Loops

for(let i=0; i<10; i++) {
    console.log(i);
}

let i= 0;
while(i< 10) {
    console.log(i);
    i++;
}

let j= 0;
do {
    console.log(j);
    j++;
}
while(j< 10)

// ===================== Objects

const student = {
    name: "flash",
    studentid: "1234",
    courses: ["JS", "Java", "PHP", ".NET"],
    program: {
        name: "IPD",
        duration: "12 months",
        noOfCOurses: 10,
        campus: {
            name: "john abbott",
            rating: "5/5",
            awesomeness: "Super Duper Awesome"
        }
    },
    sayHi: function() {
        console.log("Heeeyyyyyy!!!!")
    }
}

student.name;
student.studentid;
student["studentid"];
student.sayHi();

// program name
student.program.name;

// Access first course
student.courses[0];