import _ from "underscore";

import { Classroom } from "./classroom.service";
import { firstNames, Geography, lastNames, Physics } from "./constants";
import { getRandomBirthDate, getRandomValueFromArray } from "./helpers";
import { School } from "./school.service";
import { createSchoolDynamically, transferStudent } from "./services";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";

export function initialize(): void {
    const teacher1: Teacher = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);
    const teacher2: Teacher = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);

    const student1: Student = new Student("Alex", "Bolt", getRandomBirthDate());
    const student2: Student = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student3: Student = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());

    const mathClass: Classroom = new Classroom("Math", teacher1, [student1, student2]);
    const historyClass: Classroom = new Classroom("History", teacher2, [student3]);
    const schoolCreatedByHand: School = new School("Small school", "New York", "+79813332244", [mathClass, historyClass]);

    // Task 7
    schoolCreatedByHand.printSchool();
    transferStudent("Alex Bolt", mathClass, historyClass);
    schoolCreatedByHand.printSchool();

    // Task 8
    const schoolGenerated = createSchoolDynamically(3);

    // Task 1,4,6
    schoolGenerated.printSchool();

    // Task 5
    _.each(schoolGenerated.classes, (currentClass: Classroom) => {
        console.log(currentClass.getClassYoungestStudent());
    })

    // Task 2,3 solution in contstants.ts file
}