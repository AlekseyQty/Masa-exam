export interface Teacher {
    firstName: string;
    lastName: string;
    professions: string[];
};

export interface Student {
    firstName: string;
    lastName: string;
    birthDate: Date;
    age: () => number
};

export interface Classroom {
    name: string;
    teacher: Teacher;
    students: Student[];
};

export interface School {
    name: string;
    address: string;
    phone: string;
    classes: Classroom[];
}