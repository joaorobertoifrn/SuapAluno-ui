import { Aluno } from './aluno';

export interface Page {
  count: number;
  next: string;
  previous: string;
  results: Aluno[];
}
