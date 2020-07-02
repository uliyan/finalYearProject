import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLinkListComponent } from './public-link-list/public-link-list.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { PublicReportsComponent } from './public-reports/public-reports.component';
import { PublicSubReportComponent } from './public-sub-report/public-sub-report.component';
import { AuthModule } from './auth/auth.module';

//http and forms
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PublicLinkListComponent,
    WildCardComponent,
    PublicReportsComponent,
    PublicSubReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
