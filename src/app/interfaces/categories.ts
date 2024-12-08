import { Product } from './product';


export interface Categories {
  id: number;
  name: string;
  qtdProducts: number;
  availability: boolean;
  products?: Product[];
}