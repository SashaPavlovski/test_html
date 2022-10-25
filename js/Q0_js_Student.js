import { Person } from "./Q0_js_Person.js";
export class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  printStudent() {
    console.log(`the name is ${this.firstName}  ${this.lastName}`);
  }
  printAge() {
    console.log(`the age is ${this.age}`);
  }
}

let student1 = new Student("sasha", "pavlovski", 21, 1);
console.log(student1);
student1.printStudent();
student1.printAge();
