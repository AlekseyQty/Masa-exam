import * as _ from "underscore";

import { Classroom } from "./classroom.service";
import { Student } from "./student.service";
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
        this.classes = classes;
    }

    printSchool(): void {
        console.log("School data:");
        console.log("============");
        console.log(this.name);
        console.log(this.address);
        console.log(this.phone);
        console.log("");
        console.log("Classes");
        console.log("=======");
        // This part is a bit hard to read. I couldn't find a better solution on how to print the sorted properties of an object without changing the original object
        _.each(_.sortBy(this.classes, "name"), (classroom: Classroom, index: number) => {
            console.log(`Class ${index + 1}: ${classroom.name}`);
            console.log(`Teacher: ${classroom.teacher.fullName()} ${classroom.teacher.professions.join(", ")}`)
            console.log("Students:")
            _.each(_.sortBy(_.sortBy(classroom.students, "firstName"), "lastName"), (student: Student, index: number) => {
                console.log(`${index + 1} ${student.fullName()}: ${student.age()}`)
            });
            console.log("")
        });
    }
}