import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { AssetGroup } from '../../model/asset-group';
import { Asset } from '../../model/asset';
import { Liability } from '../../model/liability';
import { eType } from '../../model/e-type.enum';


@Component({
  selector: 'app-asset-group',
  templateUrl: './asset-group.component.html',
  styleUrls: ['./asset-group.component.css']
})
export class AssetGroupComponent implements OnInit {
  @Input() assetGroup: AssetGroup;
  @Output() addAssetEvent = new EventEmitter();
  @Output() addLiabilityEvent = new EventEmitter();
  totalValue= 0;

  constructor() { }

  ngOnInit() {
    this.calcTotalValue();
  }

  calcTotalValue() {
     this.assetGroup.assetList.forEach(asset => {
       this.totalValue += asset.value;
    });
  }

  addClicked(event) {
    console.log('add Button was clicked');
    if (this.assetGroup.groupType === eType.Asset) {
      console.log('emit addAssetEvent');
      this.addAssetEvent.emit(this.assetGroup);
    } else {
      console.log('emit addLiabilityEvent');
      this.addLiabilityEvent.emit(this.assetGroup);
      }
  }



}


