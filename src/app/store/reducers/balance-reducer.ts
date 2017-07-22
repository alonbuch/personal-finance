// import { Action } from '@ngrx/store';
import { BalanceState } from '../State/balance-state';
import * as BalanceActions from '../actions/balance-actions';

export type BalanceAction = BalanceActions.All;

const initialState: BalanceState = {
    assetGroups: [],
    isLoading: false};

export function balanceReducer (state = initialState, action: BalanceAction): BalanceState {

    switch (action.type) {

      case BalanceActions.LOAD_BALANCE:
        return Object.assign({}, state, {isLoading: true});


      case BalanceActions.LOAD_BALANCE_SUCCESS:
        return {assetGroups: action.payload, isLoading: false};


      case BalanceActions.ADD_ASSET_LIABILITY:
        return Object.assign({}, state, {isLoading: true});


      case BalanceActions.ADD_ASSET_LIABILITY_SUCCESS:
        const index = state.assetGroups.findIndex(g => g.groupId === action.payload.groupId);
        const assetGroup = Object.assign({},  state.assetGroups[index]);
        assetGroup.assetList.push(action.payload);
        return {assetGroups: [
                        ...state.assetGroups.slice(0, index),
                        assetGroup,
                        ...state.assetGroups.slice(index + 1)
                          ]
                , isLoading: false};
    }
}
