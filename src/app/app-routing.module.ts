import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { EmployeeComponent } from '../employeeRecord/employee.component';
import { AdminDashboardComponent } from '../admin.component';
import { AuthGuard } from '../services/authGuard.service';
import { AdminAuthGuard } from '../services/adminAuthGuard.service';

const routes: Routes =
[
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
