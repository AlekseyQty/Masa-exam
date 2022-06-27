import { Classroom } from "./entities";

export interface School {
    name: string;
    address: string;
    phone: string;
    classes: Classroom[];
}