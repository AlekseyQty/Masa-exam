import { IStudent } from "./entities";

export class Student implements IStudent {
    firstName: string;
    lastName: string;
    birthDate: Date;
    age(): number {
        const ageDifferenceInMilliseconds: number = Date.now() - this.birthDate.getTime();
        const ageDate: Date = new Date(ageDifferenceInMilliseconds);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    constructor(firstName: string, lastName: string, birthDate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}