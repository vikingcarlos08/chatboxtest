import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app.routing'

import { AppComponent } from './app.component';
import {ChatService} from './services/export';
import { ChatboxComponent } from './modules/chatbox/chatbox.component'
import { AppBootstrapModule } from './app-bootstrap.module';

import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppBootstrapModule,
    AppRoutingModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

