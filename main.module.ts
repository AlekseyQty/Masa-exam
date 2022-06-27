import { Classroom } from "./classroom.service";
import { firstNames, Geography, lastNames, Physics } from "./constants";
import { getRandomBirthDate, getRandomValueFromArray } from "./helpers";
import { School } from "./school.service";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";

export function initialize(): void {
    const teacherNew1: Teacher = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);
    const studentNew1: Student = new Student("Alex", "Bolt", getRandomBirthDate());
    const studentNew2: Student = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const newMathClass: Classroom = new Classroom("Math", teacherNew1, [studentNew1, studentNew2]);
    const newSchool: School = new School("Small school", "New York", "+79813332244", [newMathClass]);
    console.log(newMathClass.getClassYoungestStudent());
    // console.log(teacherNew1.fullName());
    newSchool.printSchool();
    // newSchool.transferStudent("Alex Bolt", newMathClass, newMathClass);
    // console.log(newMathClass);
}