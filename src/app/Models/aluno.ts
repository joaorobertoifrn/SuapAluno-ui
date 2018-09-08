import { Situacao } from './enums/situacao.enum';
import { SituacaoSistemica } from './enums/situacao-sistemica.enum';

export interface Aluno {
  matricula: string;
  nome: string;
  curso: string;
  campus: string;
  situacao: Situacao;
  cota_sistec?: string;
  cota_mec?: string;
  situacao_sistemica: SituacaoSistemica;
}
