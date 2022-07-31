import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptListComponent } from './component/dept-list/dept-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpListComponent } from './component/emp-list/emp-list.component';
@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent ,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
