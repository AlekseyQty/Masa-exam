import { Classroom } from "./classroom.service";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";

export interface ITeacher {
    firstName: string;
    lastName: string;
    professions: string[];
};

export interface IStudent {
    firstName: string;
    lastName: string;
    birthDate: Date;
    age: () => number
};

export interface IClassroom {
    name: string;
    teacher: Teacher;
    students: Student[];
};

export interface ISchool {
    name: string;
    address: string;
    phone: string;
    classes: Classroom[];
}