import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { BillComponent } from './pages/bill/bill.component';
import { HistoryComponent } from './pages/history/history.component';
import { RecordsComponent } from './pages/records/records.component';
import { PlanningComponent } from './pages/planning/planning.component';

const routes: Routes = [
  {path: 'main', redirectTo: 'main/bill', pathMatch: 'full'},
  {path: 'main', component: MainComponent,
    children: [
      {path: 'bill', component: BillComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'records', component: RecordsComponent},
      {path: 'planning', component: PlanningComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
