import { DocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { OpenDay } from './open_day';
import { Pitch } from './pitch';

export class Court {
  id?: string;
  name: string;
  imgUrl: string;
  location: string;
  rating?: number | null;
  priceFrom?: number | null;
  description: string;
  howToAccess: string;
  cancellationPolicy: string;
  userId: string;
  openDays?: OpenDay[];
  facilities?: string[];
  pitches: Pitch[];
  categories: string[];
  isActive: boolean;

  constructor(
    name: string,
    imgUrl: string,
    location: string,
    description: string,
    howToAccess: string,
    cancellationPolicy: string,
    userId: string,
    categories: string[],
    pitches: Pitch[]
  ) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.location = location;
    this.description = description;
    this.howToAccess = howToAccess;
    this.cancellationPolicy = cancellationPolicy;
    this.userId = userId;
    this.categories = categories;
    this.isActive = false;
    this.pitches = pitches;
  }
  public priceFormated(): string {
    return `${this.priceFrom}`; //TODO:formatear
  }
}
// Firestore data converter
export const courtConverter = {
  toFirestore: (court: Court) => {
    return {
      name: court.name,
      imgUrl: court.imgUrl,
      location: court.location,
      description: court.description,
      howToAccess: court.howToAccess,
      cancellationPolicy: court.cancellationPolicy,
      userId: court.userId,
      categories: court.categories,
      isActive: court.isActive,
      pitches: court.pitches
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options) as Court;
    if (data) {
      const model = new Court(data.name, data.imgUrl, data.location, data.description, data.howToAccess, data.cancellationPolicy, data.userId,
        data.categories, []);
      model.openDays = data.openDays ?? [];
      model.priceFrom = data.priceFrom ?? null;
      model.rating = data.rating ?? null;
      return model;
    }
  }
};
