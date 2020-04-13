import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PanelComponent } from '../panel/panel.component';
import { LoginComponent } from '../login/login.component';
import { EmployeeComponent } from '../employeeRecord/employee.component';
import { fakeBackendProvider } from '../helpers/fake-backend';
import { AuthService } from '../services/authService.service';
import { AuthGuard } from '../services/authGuard.service';
import { AdminAuthGuard } from '../services/adminAuthGuard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
