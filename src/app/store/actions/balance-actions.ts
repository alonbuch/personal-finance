import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import { Asset } from '../../model/asset';
import { Liability } from '../../model/liability';
import { AssetGroup } from '../../model/asset-group';
import { IAssetLiability } from '../../model/i-asset-liability';
import { Observable } from 'rxjs/Observable';


export const LOAD_BALANCE = '[BALANCE] Load Balance';
export const LOAD_BALANCE_SUCCESS = '[BALANCE] Load Balance Success';
export const ADD_ASSET_LIABILITY = '[BALANCE] Add Asset Liability';
export const ADD_ASSET_LIABILITY_SUCCESS = '[BALANCE] Add Asset Liability Success';

export class LoadBalance implements Action {
  readonly type = LOAD_BALANCE;
}

export class LoadBalanceSuccess implements Action {
  readonly type = LOAD_BALANCE_SUCCESS;

  constructor(public payload: AssetGroup[]) {}
}

export class AddAssetLiability implements Action {
  readonly type = ADD_ASSET_LIABILITY;

  constructor(public payload: IAssetLiability) {}
}

export class AddAssetLiabilitySuccess implements Action {
  readonly type = ADD_ASSET_LIABILITY_SUCCESS;

  constructor(public payload: IAssetLiability) {}
}


export type All
  = LoadBalance
  | LoadBalanceSuccess
  | AddAssetLiability
  | AddAssetLiabilitySuccess;
