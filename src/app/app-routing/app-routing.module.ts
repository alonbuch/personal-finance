import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BalanceSheetComponent} from './../components/balance-sheet/balance-sheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/balance-sheet', pathMatch: 'full' },
  { path: 'balance-sheet',   component: BalanceSheetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

