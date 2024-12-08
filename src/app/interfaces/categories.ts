import { Product } from './product';


export interface Categories {
  id: number | null;
  name: string;
  qtdProducts: number;
  availability: boolean;
  products?: Product[];
}