import { Patient } from "./Patient";
export type RecentVisit = {
    id: string;
    visitNumber: string;
    patient: Patient;
    updatedAt: string;
};
