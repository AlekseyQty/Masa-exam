import * as _ from "underscore";

import { Classroom } from "./classroom.service";
import { ISchool } from "./entities";
import { Student } from "./student.service";

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

    printSchool(): void {
        // We are working with a copy of an object, so original object remains untouched
        const schoolSorted: School = { ...this };

        // Sort ascending by a name of the class
        schoolSorted.classes = _.sortBy(schoolSorted.classes, (schoolClass) => {
            return schoolClass.name;
        });

        // Students in a class sorted by lastName and then by firstName
        _.each(schoolSorted.classes, (classroom: Classroom) => {
            classroom.students = _.sortBy(_.sortBy(classroom.students, "firstName"), "lastName");
        })

        console.log("School data:");
        console.log("============");
        console.log(schoolSorted.name);
        console.log(schoolSorted.address);
        console.log(schoolSorted.phone);
        console.log("");
        console.log("Classes");
        console.log("=======");
        _.each(schoolSorted.classes, (classroom: Classroom, index: number) => {
            console.log(`Class ${index + 1}: ${classroom.name}`);
            console.log(`Teacher: ${classroom.teacher.fullName()} ${classroom.teacher.professions.join(", ")}`)
            console.log("Students:")
            _.each(classroom.students, (student: Student, index: number) => {
                console.log(`${index + 1} ${student.fullName()}: ${student.age()}`)
            });
            console.log("")
        });
    }
}