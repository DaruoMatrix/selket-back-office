import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { BankComponent } from './bank/bank.component';
import { DisplayManagerComponent } from './display-manager/display-manager.component';
import { ModifyManagerComponent } from './modify-manager/modify-manager.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { ModifyBankComponent } from './modify-bank/modify-bank.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'clients', component: ClientComponent , canActivate:[AuthGuard]},  
  { path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},  
  { path: 'email', component: EmailComponent, canActivate:[AuthGuard] },  
  { path: 'manager', component: ManagerComponent , canActivate:[AuthGuard]},  
  { path: 'displayManager', component: DisplayManagerComponent , canActivate:[AuthGuard]},  
  { path: 'modifyManager', component: ModifyManagerComponent , canActivate:[AuthGuard]},  
  { path: 'bank', component: BankComponent , canActivate:[AuthGuard]},  
  { path: 'addBank', component: AddBankComponent , canActivate:[AuthGuard]},  
  { path: 'modifyBank', component: ModifyBankComponent , canActivate:[AuthGuard]},  
  { path: 'login', component: LoginComponent },  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
