export class OpenDay {
  dayId: number;
  from: string;
  to: string;

  constructor(dayId: number, from: string, to: string) {
    this.dayId = dayId;
    this.from = from;
    this.to = to;
  }
}
