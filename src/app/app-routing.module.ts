import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing components
import {PublicLinkListComponent} from './public-link-list/public-link-list.component';

//public reports components
import {PublicReportsComponent} from './public-reports/public-reports.component';
import {PublicSubReportComponent} from './public-sub-report/public-sub-report.component';

//login components
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';

//Admin components
import { AdminComponent } from './auth/components/admin/admin.component';
import { AdminUploadComponent } from './auth/components/admin/admin-upload/admin-upload.component';
import { AdminMeetsComponent } from './auth/components/admin/admin-meets/admin-meets.component';
//Admin user-mgmt components
import { AdminUsersComponent } from './auth/components/admin/admin-users/admin-users.component';

//Club components
import { ClubComponent } from './auth/components/club/club.component';
import { ClubMeetsComponent } from './auth/components/club/club-meets/club-meets.component';

//Reports components
import { AdminReportsComponent } from './auth/components/admin/admin-reports/admin-reports.component';

//wildcard
import {WildCardComponent} from './wild-card/wild-card.component';

const routes: Routes = [
  {path: '', redirectTo: '/public', pathMatch: 'full'},
  {
    path: 'public', component: PublicLinkListComponent,
    children:
    [
      {
        path: 'pubSublinks', 
        component: PublicReportsComponent,
        children: 
        [
          {path: 'pubSublink1', component: PublicSubReportComponent}
        ]
      }
    ]
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent,
    children:[
      {path: 'reset', component: ResetPasswordComponent},
      {path: 'uploads', component: AdminUploadComponent},
      {path: 'meets', component: AdminMeetsComponent},
      {path: 'reports', component: AdminReportsComponent},
      {path: 'users', component: AdminUsersComponent}     
    ]
  },
  {
    path: 'club', component: ClubComponent,
    children:[
      {path: 'reset', component: ResetPasswordComponent},
      {path: 'meets', component: ClubMeetsComponent},
      {path: 'reports', component: AdminReportsComponent}
    ]
  },
  {path: "**", component: WildCardComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
