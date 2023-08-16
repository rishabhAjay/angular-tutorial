import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //include all components within the declarations
  declarations: [AppComponent, HomeComponent],

  // import the modules
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],

  //entry point is AppComponent
  bootstrap: [AppComponent],
})
export class AppModule {}
