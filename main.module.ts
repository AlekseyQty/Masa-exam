import { firstNames, Geography, lastNames, Physics } from "./constants";
import { getRandomBirthDate, getRandomValueFromArray } from "./helpers";
import { Student } from "./student.service";
import { Teacher } from "./teacher.service";

export function initialize(): void {
    const teacherNew1 = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics]);
    const studentNew1 = new Student(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    console.log(teacherNew1);
    console.log(studentNew1);
}