import { firstNames, Geography, lastNames, Physics } from "./constants";
import { getRandomValueFromArray } from "./helpers";
import { Teacher } from "./teacher.service";

export function initialize(): void {
    const teacherNew1 = new Teacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography, Physics])
    console.log(teacherNew1);
}