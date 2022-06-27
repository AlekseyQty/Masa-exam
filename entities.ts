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
    teacher: ITeacher;
    students: IStudent[];
};

export interface ISchool {
    name: string;
    address: string;
    phone: string;
    classes: IClassroom[];
}