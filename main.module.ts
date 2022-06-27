import { Classroom } from "./classroom.service";
import { firstNames, Geography, lastNames, Physics } from "./constants";
import { getRandomBirthDate, getRandomValueFromArray } from "./helpers";
import { School } from "./school.service";
import { createSchoolDynamically, transferStudent } from "./services";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";

export function initialize(): void {
    // const teacherNew1: Teacher = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);
    // const teacherNew2: Teacher = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);
    // const studentNew1: Student = new Student("Alex", "Bolt", getRandomBirthDate());
    // const studentNew2: Student = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    // const studentNew3: Student = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    // const newMathClass: Classroom = new Classroom("Math", teacherNew1, [studentNew1, studentNew2]);
    // const newHistoryClass: Classroom = new Classroom("History", teacherNew2, [studentNew3]);
    // const newSchool: School = new School("Small school", "New York", "+79813332244", [newMathClass, newHistoryClass]);
    // console.log(newMathClass.getClassYoungestStudent());
    // // console.log(teacherNew1.fullName());
    // newSchool.printSchool();
    // transferStudent("Alex Bolt", newMathClass, newHistoryClass);
    // newSchool.printSchool();
    // // console.log(newMathClass);
    const schoolGenerated = createSchoolDynamically(5, 4);
    // schoolGenerated.printSchoolUnsorted();
    schoolGenerated.printSchool();
    // schoolGenerated.printSchoolUnsorted();
}