import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:MyDashboardComponent},
  {path:'table',component:MyTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
