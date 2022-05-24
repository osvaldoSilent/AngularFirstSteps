import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import {AppHeader } from './components/header/header.component';
import { Footer } from './components/footer/footer';
import { Body } from './components/main/body-component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppHeader, Footer, Body]
})
export class AppModule { }
