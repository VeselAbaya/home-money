export interface IRecord {
  categoryName: string;
  recordType: 'income' | 'consumption';
  value: number;
  comment?: string;
}
