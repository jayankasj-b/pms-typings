import { History } from 'domain/History';
import { Treatment } from 'domain/Treatment';

export type UpsertVisitRequest = {
  id?: string;
  patient?: {
    id?: string;
  };
  history?: History;
  treatment?: Treatment;
};
