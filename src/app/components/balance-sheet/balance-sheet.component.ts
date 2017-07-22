import { Component, OnInit  } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { AssetGroup } from '../../model/asset-group';
import { eCurrency } from '../../model/e-currency.enum';
import { Liability } from '../../model/liability';
import { Asset } from '../../model/asset';
import { IAssetLiability } from '../../model/i-asset-liability';
import { eType } from '../../model/e-type.enum';
import { AssetModalComponent } from '../asset-modal/asset-modal.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/State/app-state';
import { Observable } from 'rxjs/Observable';
import { BalanceState } from '../../store/State/balance-state';
import * as BalanceActions from '../../store/actions/balance-actions'


@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {
  Year= 2017;
  balanceState$: Observable<BalanceState>;
  totalAssets= 0;
  totalLiabilities= 0;

  constructor(private modalService: NgbModal,
              private store: Store<AppState> ) {
                  this.balanceState$ = this.store
                        .select<BalanceState>((appState) => appState.balanceState)
                        .do(b => console.log('balanceState is:', b));

                  this.store.dispatch(new BalanceActions.LoadBalance());
               }

  ngOnInit() {
    this.totalAssets = this.calcTotal(eType.Asset);
    this.totalLiabilities = this.calcTotal(eType.Liability);
  }


  calcTotal(groupType: eType): number {
    const total = 0;
    // this.groups$.filter(g => g.groupType === groupType).forEach(ag => {
    //     ag.assetList.forEach(asset => {
    //         total += asset.value;
    //     });
    // });
    return total;
  }


  addLiability(event) {    // console.log('add liability');
    // const modalRef = this.modalService.open(AssetModalComponent);
    // modalRef.componentInstance.type = eType.Liability;
    // modalRef.componentInstance.assetLiability = new Liability(event.groupId, '', null, null);
    // modalRef.result.then((liability => {
    //     console.log(liability.name);
    //     this.groups.find(g => g.groupId === liability.groupId).assetList.push(liability);
    // }));
  }

  addAsset(event) {
    // console.log('add asset');
    // const modalRef = this.modalService.open(AssetModalComponent);
    // modalRe.componentInstance.type = eType.Asset;
    // modalRef.componentInstance.assetLiability = new Asset(event.groupId, '', null, null);
    // modalRef.result.then((asset => {
    //     console.log(asset.name);
    //     this.groups.find(g => g.groupId === asset.groupId).assetList.push(asset);
    // }));
  }

  hideChildModal() {
    // this.childModal.hide();
  }

}
