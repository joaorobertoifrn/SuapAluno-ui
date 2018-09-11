import { Vinculo } from './vinculo';

export interface Perfil {
  id: number;
  matricula: string;
  nome_usual: string;
  email: string;
  url_foto_75x100: string;
  tipo_vinculo: string;
  vinculo: Vinculo;
}
