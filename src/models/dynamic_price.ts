export class DynamicPrice {
  isActive: boolean;
  type: string;
  price?: number;
  applicableDays: string[];
  from: string;
  to: string;

  constructor(
    type: string,
    applicableDays: string[],
    from: string,
    to: string,
    isActive: boolean
  ) {
    this.type = type;
    this.applicableDays = applicableDays;
    this.from = from;
    this.to = to;
    this.isActive = isActive;
  }
}
