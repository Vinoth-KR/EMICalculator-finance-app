import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaindashBoardComponent } from './components/maindash-board/maindash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MaindashBoardComponent
  ],
  imports: [
    BrowserModule,    
    AccountsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
