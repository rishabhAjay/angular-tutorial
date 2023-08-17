import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from 'src/app/pipes-2/append.pipe';
import { ServicesModuleComponent } from './services-module/services-module.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormModule, ButtonModule } from '@coreui/angular';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { InvalidDirective } from './invalid-directive.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  //include all components within the declarations, you also have to include
  // custom pipes here
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    PipesComponent,
    AppendPipe,
    ServicesModuleComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    InvalidDirective,
  ],

  // import the modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    FormModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  //you can define your injectible classes here as well
  providers: [],

  //entry point is AppComponent
  bootstrap: [AppComponent],
})
export class AppModule {}
