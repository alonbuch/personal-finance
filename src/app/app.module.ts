import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import { NgbModule, NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BalanceSheetComponent } from './components/balance-sheet/balance-sheet.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AssetGroupComponent } from './components/asset-group/asset-group.component';
import { AssetModalComponent } from './components/asset-modal/asset-modal.component';
import { GroupTypePipe } from './pipes/group-type.pipe';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BalanceEffects } from './store/effects/balance-effects';
import { AppState } from './store/State/app-state';
import { BalanceService } from './services/balance.service';
import { balanceReducer } from './store/reducers/balance-reducer';

@NgModule({
  declarations: [
    AppComponent,
    BalanceSheetComponent,
    AssetModalComponent,
    AssetGroupComponent,
    GroupTypePipe
  ],
  entryComponents: [AssetModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({balance: balanceReducer}),
    EffectsModule.forRoot([BalanceEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [NgbModal, NgbActiveModal, BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
