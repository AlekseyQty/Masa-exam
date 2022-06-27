// Ideas:
// Build dynamically created classmates: collection of first names, collection of lastnames, randomly pick birth date
import * as _ from "underscore";

import { firstNames, Geography, Hebrew, History, lastNames, Mathematics, Physics } from "./constants";
import { Classroom, School, Student, Teacher } from "./entities";
import { getRandomBirthDate, getRandomValueFromArray } from "./helpers";

export function initializeSchool(): School {
    const student1: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student2: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student3: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student4: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());

    const teacher1: Teacher = createTeacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Mathematics, Hebrew, History]);

    const student5: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student6: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student7: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student8: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());

    const teacher2: Teacher = createTeacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);

    const mathClass: Classroom = createClassroom("Math", teacher1, [student1, student2, student3, student4]);
    const geographyClass: Classroom = createClassroom("Geography", teacher2, [student5, student6, student7, student8]);

    return {
        name: "Big school",
        address: "Moscow",
        phone: "+7 (916) 000 12 21",
        classes: [
            mathClass,
            geographyClass
        ]
    }
}

function createTeacher(firstName: string, lastName: string, professions: string[]): Teacher {
    return {
        firstName: firstName,
        lastName: lastName,
        professions: professions
    };
}

function createStudent(firstName: string, lastName: string, birthDate: Date): Student {
    return {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        age: () => {
            const ageDifferenceInMilliseconds: number = Date.now() - birthDate.getTime();
            const ageDate: Date = new Date(ageDifferenceInMilliseconds);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    };
}

function createClassroom(name: string, teacher: Teacher, students: Student[]): Classroom {
    return {
        name: name,
        teacher: teacher,
        students: students
    };
}

export function getClassYoungestStudent(classroom: Classroom): Student {
    const studentsSortedByAge: Student[] = _.sortBy(classroom.students, (student) => {
        return -student.birthDate.getTime();
    });

    // Check if there are more than one student with the same birth date
    if (studentsSortedByAge.length > 1) {
        if (studentsSortedByAge[0].birthDate.getTime() == studentsSortedByAge[1].birthDate.getTime()) {
            console.log("There are some students with the same age");
        }
    }

    return studentsSortedByAge[0];
}

export function printSchool(school: School): void {
    // We are working with a copy of an object, so original object remains untouched
    const schoolSorted: School = { ...school };

    // Sort ascending by a name of the class
    schoolSorted.classes = _.sortBy(schoolSorted.classes, (schoolClass) => {
        return schoolClass.name;
    });

    // Students in a class sorted by lastName and then by firstName
    _.each(schoolSorted.classes, (classroom: Classroom) => {
        classroom.students = _.sortBy(_.sortBy(classroom.students, "firstName"), "lastName");
    })

    console.log("School data:");
    console.log("============");
    console.log(schoolSorted.name);
    console.log(schoolSorted.address);
    console.log(schoolSorted.phone);
    console.log("");
    console.log("Classes");
    console.log("=======");
    _.each(schoolSorted.classes, (classroom: Classroom, index: number) => {
        console.log(`Class ${index + 1}: ${classroom.name}`);
        console.log(`Teacher: ${classroom.teacher.firstName} ${classroom.teacher.lastName} ${classroom.teacher.professions.join(", ")}`)
        console.log("Students:")
        _.each(classroom.students, (student: Student, index: number) => {
            console.log(`${index + 1} ${student.firstName} ${student.lastName}: ${student.age()}`)
        });
        console.log("")
    });
}

export function transferStudent(fullName: string, fromClassroom: Classroom, toClassrom: Classroom): void {

}