/*const student = {
    name : "Kristine Garcia",
    age : 33,
    enrolled : true,
    courses : ["Javascript", "Web Designing", "Algorithms"],
    displayInfo: function() {
        return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`;
    }
};
console.log("Name: ", student.name);
console.log("Age: ", student.age);

console.log(student.displayInfo());

const jsonString = JSON.stringify(student);
console.log("JSON String: ", jsonString);

const javaObj = JSON.parse(jsonString);
console.log("New Object: ", javaObj);

console.log("Comparison: ", student === javaObj);

let { name, age, enrolled, courses } = student;
console.log(name);
console.log(courses);


let numbers = [75, 89, 83, 90, 93];
let [first, second, third, fourth, fifth] = numbers;
console.log(first);
console.log(second);*/

const student = {
    name : "Kristine Garcia",
    age : 33,
    enrolled : true,
    courses : ["Javascript", "Web Designing", "Algorithms"]
};
const copiedObj = { ...student };
console.log("Cloned Student: ", copiedObj);