import { PatientDateOfBirth } from './PatientDateOfBirth';
export type Patient = {
    id: string;
    firstname?: string;
    lastname: string;
    fullname: string;
    dateOfBirth: PatientDateOfBirth;
    address?: string;
    phone?: string;
};
