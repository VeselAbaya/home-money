export interface IBill {
  value: number;
  currency: 'RUB' | 'USD' | 'EUR';
  _userId?: string;
}
