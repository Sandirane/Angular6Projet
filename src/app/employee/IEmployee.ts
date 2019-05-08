import { ISkill } from './ISkill'
export interface IEmployee {
    id: number;
    fullName: string;
    contactPreference: string;
    email: string;
    phone: number;
    skills: ISkill[];
}




