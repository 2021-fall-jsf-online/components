import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { PnFizzBuzzComponent } from './pn-fizz-buzz/pn-fizz-buzz.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { MatCheckboxModule, _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { JvSlackNTellComponent } from './jv-slack-n-tell/jv-slack-n-tell.component';

import { JacComponentComponent } from './jac-component/jac-component.component';
import { MatFormFieldModule} from '@angular/material/form-field';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { MatInputModule } from '@angular/material/input';
import { MtbSelectComponent } from './mtb-select/mtb-select.component';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio'
import { BoredComponent } from './bored/bored.component';

@NgModule({
  declarations: [
    AppComponent
    , PizzaToppingsComponent
    , TjsMultiplicationComponent
    , MtbSelectComponent
    , JacComponentComponent
    , JvSlackNTellComponent
    , PnFizzBuzzComponent
    , BoredComponent
    , TjsAdditionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatSelectModule
    , MatInputModule
    , CommonModule
    , MatExpansionModule
    , MatSelectModule
    , MatRadioModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
