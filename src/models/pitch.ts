import { DocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { DynamicPrice } from './dynamic_price';

export class Pitch {
  id?: string;
  name: string;
  price: number;
  size?: string | null;
  surface?: string | null;
  period: number;
  categoryId?: string | null;
  category?: string | null;
  dynamicPrices?: DynamicPrice[] | null;
  priceDynamic?: string | null;

  constructor(name: string, price: number, period: number) {
    this.name = name;
    this.price = price;
    this.period = period;
  }
}

export const pitchConverter = {
  toFirestore: (pitch: Pitch) => {
    return {
      name: pitch.name,
      price: pitch.price,
      size: pitch.size,
      surface: pitch.surface,
      period: pitch.period,
      categoryId: pitch.categoryId,
      category: pitch.category,
      dynamicPrices: pitch.dynamicPrices,
      priceDynamic: pitch.priceDynamic,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options) as Pitch;
    if (data) {
      const model = new Pitch(data.name, data.price, data.period);
      model.size = data.size ?? null;
      model.surface = data.surface ?? null;
      model.categoryId = data.categoryId ?? null;
      model.category = data.category ?? null;
      model.dynamicPrices = data.dynamicPrices ?? [];
      model.priceDynamic = data.priceDynamic ?? null;

      return model;
    }
  }
};
