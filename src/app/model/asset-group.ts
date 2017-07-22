import {IAssetLiability} from './i-asset-liability';
import { eType } from './e-type.enum';

export class AssetGroup {
  groupId: number;
  groupName: string;
  groupType: eType;
  assetList: IAssetLiability[];
}
