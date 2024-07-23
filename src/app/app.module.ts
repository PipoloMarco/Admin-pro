import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SideBarComponent,
    BreadCrumbsComponent,
    NoPageFoundComponent,
    HeaderComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
