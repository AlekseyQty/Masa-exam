import * as _ from "underscore";

import { Classroom } from "./classroom.service";
import { Student } from "./student.service";


export function transferStudent(fullName: string, fromClassroom: Classroom, toClassrom: Classroom): void {
    try {
        const movingStudent: Student = _.find(fromClassroom.students, (student: Student) => {
            return student.fullName() === fullName;
        })!

        if (movingStudent) {
            fromClassroom.students = _.without(fromClassroom.students, movingStudent);
            toClassrom.students.push(movingStudent);
        }
        else {
            console.log(`There is no student with name ${fullName} in classroom ${fromClassroom.name}`)
        }
    }
    catch (error) {
        console.log(error);
    }
}