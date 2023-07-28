import { Patient } from './Patient';
import { Treatment } from './Treatment';
import { History } from './History';

export type Visit = {
  id: string;
  visitNumber: string;
  treatment?: Treatment;
  history?: History;
  patient: Patient;
  createdAt: string;
};
