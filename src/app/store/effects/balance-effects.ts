import { Injectable } from '@angular/core';
import { AppState } from '../State/app-state';
import { Effect, Actions  } from '@ngrx/effects';
import { BalanceService } from '../../services/balance.service';
import { Observable } from 'rxjs/Observable';
import { AssetGroup } from '../../model/asset-group';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import * as BalanceActions from '../../store/actions/balance-actions';

@Injectable()
export class BalanceEffects {

  constructor (
        private actions$: Actions,

        private balanceService: BalanceService
    ) {}

    // tslint:disable-next-line:member-ordering
    @Effect() loadBalance$: Observable<Action> = this.actions$
    .ofType(BalanceActions.LOAD_BALANCE)
    .do(action => console.log('action: ', action))
    .switchMap(() => this.balanceService.getBalance())
    .do(r => console.log('assetGroups: ', r))
    // .reduce<AssetGroup, AssetGroup[]>( (assetGroups, assetGroup) => [...assetGroups, assetGroup], [])
    .map(assetGroups => new BalanceActions.LoadBalanceSuccess(assetGroups));


}
