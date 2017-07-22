import { eCurrency } from './e-currency.enum';

export interface IAssetLiability {
  groupId: number;
  name: string;
  value: number;
  currency: eCurrency;
}
