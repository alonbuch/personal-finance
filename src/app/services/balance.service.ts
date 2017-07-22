import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { AssetGroup } from '../model/asset-group';
import { eType } from '../model/e-type.enum';
import { eCurrency } from '../model/e-currency.enum';
import 'rxjs/add/operator/Map';
import 'rxjs/add/observable/from';

@Injectable()
export class BalanceService {

  constructor (private http: Http) {}

  getBalance(): Observable<AssetGroup[]> {
        return this.http.get('/assets/balance-data.json')
        .map(res => res.json());
        // return Observable.from(this.balance);
    }

}

