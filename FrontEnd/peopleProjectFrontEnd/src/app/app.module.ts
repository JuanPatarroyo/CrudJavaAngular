import { DataService } from './data-service';
import { PersonService } from './person-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
