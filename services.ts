import * as _ from "underscore";

import { Classroom } from "./classroom.service";
import { classNames, firstNames, lastNames, schoolNames } from "./constants";
import { getRandomBirthDate, getRandomValueFromArray, getRandomValueFromArrayWithout } from "./helpers";
import { School } from "./school.service";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";


export function transferStudent(fullName: string, fromClassroom: Classroom, toClassrom: Classroom): void {
    try {
        // I use non-null assertion operator because result of _.find can be undefined
        const movingStudent: Student = _.find(fromClassroom.students, (student: Student) => {
            return student.fullName() === fullName;
        })!

        if (movingStudent) {
            fromClassroom.students = _.without(fromClassroom.students, movingStudent);
            toClassrom.students.push(movingStudent);
        }
        else {
            console.log(`There is no student with name ${fullName} in classroom ${fromClassroom.name}`);
        }
    }
    catch (error) {
        console.log(error);
    }
}

export function createSchoolDynamically(class_number: number, class_student_limit: number = 20): School {
    const generatedClasses: Classroom[] = [];

    for (let i = 0; i < class_number; i++) {
        const className: string = getRandomValueFromArray(classNames);
        const generatedStudents: Student[] = [];
        const generatedTeacher: Teacher = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [className, getRandomValueFromArrayWithout(classNames, className)]);

        for (let j = 0; j < class_student_limit; j++) {
            const generatedStudent: Student = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
            generatedStudents.push(generatedStudent);
        }

        generatedClasses.push(new Classroom(className, generatedTeacher, generatedStudents));
    }

    const generatedSchool = new School(getRandomValueFromArray(schoolNames), "Rockford, Minnesota", "318-629-0333", generatedClasses);

    return generatedSchool;
}