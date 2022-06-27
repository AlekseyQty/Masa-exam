export const Mathematics: string = "Mathematics";
export const Hebrew: string = "Hebrew";
export const Geography: string = "Geography";
// History constant can't be used in other files because it has no "export" keyword, so it is not exposed to other files
// const History: string = "History";
// To expose History to another files we add "export" keyword
export const History: string = "History"; 
export const Chemistry: string = "Chemistry";
export const Physics: string = "Physics";

export const firstNames: string[] = [
    "Ivan",
    "Peter",
    "Olga",
    "Fyodor",
    "Oleg",
    "Ksenia"
];

export const lastNames: string[] = [
    "Petrov",
    "Ivanov",
    "Sidorov",
    "Kukushkin",
    "Fyodorov"
];

export const schoolNames: string[] = [
    "School of Happy Valley",
    "Highgate School and Academy",
    "HighImpact Institute",
    "Mentoring the Future",
    "Wisdom Elementary School"
];

export const classNames: string[] = [
    "History",
    "Chemistry",
    "Physics",
    "Geography",
    "Hebrew",
    "Mathematics"
];