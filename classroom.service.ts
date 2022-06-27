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
}