export interface ITeacher {
    firstName: string;
    lastName: string;
    professions: string[];
};

export class Teacher implements ITeacher {
    firstName: string;
    lastName: string;
    professions: string[];

    constructor(firstName: string, lastName: string, professions: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.professions = [...professions]
    }
}