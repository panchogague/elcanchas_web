import { DynamicPrice } from './dynamic_price';

export class Pitch {
  id?: string;
  name: string;
  price: number;
  size?: string;
  surface?: string;
  period: number;
  categoryId?: string;
  category?: string;
  dynamicPrices?: DynamicPrice[];
  priceDynamic?: string;

  constructor(name: string, price: number, period: number) {
    this.name = name;
    this.price = price;
    this.period = period;
  }
}
