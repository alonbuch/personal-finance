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
import { BalanceState } from '../../store/State/balance-state';
import * as BalanceActions from '../../store/actions/balance-actions'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';


@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {
  Year= 2017;
  balanceState$: Observable<BalanceState>;
  assetGroups$: Observable<AssetGroup[]>;
  totalAssets= 0;
  totalLiabilities= 0;

  constructor(private modalService: NgbModal,
              private store: Store<AppState> ) {

                  this.balanceState$ = this.store
                        .select<BalanceState>((appState) => appState.balanceState)
                        .do(b => console.log('balanceState is:', b));
                  this.assetGroups$ = this.balanceState$.map(bs => bs.assetGroups);
               }

  ngOnInit() {
    this.store.dispatch(new BalanceActions.LoadBalance());
    this.calcTotals();
  }

  // Calculate total asset value and total liability value
  calcTotals() {
        this.assetGroups$.subscribe(assetGroups => assetGroups.forEach(ag => {
        ag.assetList.forEach( asset => {
            if (ag.groupType === eType.Asset) {
                this.totalAssets += asset.value;
            } else {
                      this.totalLiabilities += asset.value;
            }
        })}))
  }

  // open a modal dialog for entering asset/ liability details
  // if save button was clicked in the modal dialog than dispatch AddAssetLiability action
  addAssetLiability(event) {
    console.log('add asset\liability');
    const modalRef = this.modalService.open(AssetModalComponent);
    if (event.groupType === eType.Asset) {
      modalRef.componentInstance.type = eType.Asset;
      modalRef.componentInstance.assetLiability = new Asset(event.groupId, '', null, null);
      }  else {
          modalRef.componentInstance.type = eType.Liability;
          modalRef.componentInstance.assetLiability = new Liability(event.groupId, '', null, null);
      }
    modalRef.result.then((r => {
        if (r instanceof Asset || r instanceof Liability)  {
            console.log('Asset/Liability name: ', r.name);
            this.store.dispatch(new BalanceActions.AddAssetLiability(r));
        } else {
            console.log('Modal close button was clicked');
        }

    }));
  }


}
