import { ICategory } from './category.interface';

export interface IRecord {
  category: ICategory;
  recordType: 'income' | 'consumption';
  value: number;
  comment?: string;
}
