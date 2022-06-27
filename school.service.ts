import { Classroom } from "./classroom.service";
import { ISchool } from "./entities";

export class School implements ISchool {
    name: string;
    address: string;
    phone: string;
    classes: Classroom[];

    constructor(name: string, address: string, phone: string, classes: Classroom[]) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.classes = [...classes]
    }
}