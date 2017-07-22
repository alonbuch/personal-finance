import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { IAssetLiability } from '../../model/i-asset-liability';
import { eType } from '../../model/e-type.enum';
import { eCurrency } from '../../model/e-currency.enum';
import { Asset } from '../../model/asset';

@Component({
  selector: 'app-asset-modal',
  templateUrl: './asset-modal.component.html',
  styleUrls: ['./asset-modal.component.css']
})
export class AssetModalComponent implements OnInit {
  @Input() type: eType;
  @Input() assetLiability: IAssetLiability;
  title: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
      if (this.type === eType.Asset) {
        this.title = 'הוסף נכס';
      } else {
          this.title = 'הוסף התחייבות';
      }
  }

  saveAsset() {
    // this.assetLiability = { groupId: this.assetLiability.groupId, name: 'נכס חדש', value: 111, currency: eCurrency.Nis};
    this.activeModal.close(this.assetLiability);
  }

}
