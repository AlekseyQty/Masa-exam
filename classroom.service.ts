import * as _ from "underscore";

import { IClassroom } from "./entities";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";

export class Classroom implements IClassroom {
    name: string;
    teacher: Teacher;
    students: Student[];

    constructor(name: string, teacher: Teacher, students: Student[]) {
        this.name = name;
        this.teacher = teacher;
        this.students = [...students]
    }

    getClassYoungestStudent(): Student {
        const studentsSortedByAge: Student[] = _.sortBy(this.students, (student) => {
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
}