import { Aluno } from './aluno';

export interface Pagina {
  count: number;
  next: string;
  previous: string;
  results: Aluno[];
}
