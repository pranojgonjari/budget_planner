import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'side-nav',component:SideNavComponent},
  {component:DashboardComponent,path:'dashboard'},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  // {path:'todo',component:TodoComponent},
  // {path:'history',component:HistoryComponent},
  // {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
