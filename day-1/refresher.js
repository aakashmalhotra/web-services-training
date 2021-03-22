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
        noOfCourses: 10,
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

// ========================== Functions

function adder(x,y) {
    const sum = x+y;
    return sum;
}
adder(5,10);

const adder2 = function (x,y) {
    const sum = x+y;
    return sum;
}
adder2(5,10);

// Using fat arrow operator
const adder3 =  (x,y) =>  {
    const sum = x+y;
    return sum;
}
adder3(5,10);

const numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(function(number) {
    console.log(number*3);
})

numbers.forEach((number) => {
    console.log(number*3);
})

numbers.forEach(number => {
    console.log(number*3);
})