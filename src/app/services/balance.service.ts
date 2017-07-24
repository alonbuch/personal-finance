import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { AssetGroup } from '../model/asset-group';
import { eType } from '../model/e-type.enum';
import { eCurrency } from '../model/e-currency.enum';
import 'rxjs/add/operator/Map';
import 'rxjs/add/observable/from';
import { IAssetLiability } from '../model/i-asset-liability';
import { IGeneralResponse } from '../model/i-general-response';

//  *** https://angular.io/guide/http ***

@Injectable()
export class BalanceService {

  constructor (private http: Http) {}

  getBalance(): Observable<AssetGroup[]> {
        return this.http.get('/assets/balance-data.json')
        .map(res => res.json());
    }

  // TODO: call real service
  addAssetLiability(assetLiability: IAssetLiability): Observable<IGeneralResponse> {
    return this.http.post('myUrl', assetLiability)
        .map((r) =>  Object.assign({}, {'resultCode': true}))
  }
}
