import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestService } from './providers/rest.service';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms';
import { ManagerComponent } from './manager/manager.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { BankComponent } from './bank/bank.component';
import { DisplayManagerComponent } from './display-manager/display-manager.component';
import { ModifyManagerComponent } from './modify-manager/modify-manager.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { ModifyBankComponent } from './modify-bank/modify-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DashboardComponent,
    ClientDetailsComponent,
    EmailComponent,
    ManagerComponent,
    LoginComponent,
    BankComponent,
    DisplayManagerComponent,
    ModifyManagerComponent,
    AddBankComponent,
    ModifyBankComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SnotifyModule
  ],
  
  providers: [RestService, AuthGuard,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
