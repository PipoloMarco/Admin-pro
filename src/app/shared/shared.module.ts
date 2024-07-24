import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    BreadCrumbsComponent,
    NoPageFoundComponent,
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    BreadCrumbsComponent,
    NoPageFoundComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
