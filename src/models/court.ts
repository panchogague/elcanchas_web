import { OpenDay } from './open_day';
import { Pitch } from './pitch';

export class Court {
  id?: string;
  name: string;
  imgUrl: string;
  location: string;
  rating?: number;
  priceFrom?: number;
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
