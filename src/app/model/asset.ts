import { IAssetLiability } from './i-asset-liability';
import { eCurrency } from './e-currency.enum';

export class Asset implements IAssetLiability {
  valueInNIS: number;

  constructor(public groupId: number, public name: string, public value: number, public currency: eCurrency) {
  }

}
