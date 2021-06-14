import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoroccoComponent } from './morocco/morocco.component';
import { AllPhonesComponent } from './all-phones/all-phones.component';
import { EthiopiaComponent } from './ethiopia/ethiopia.component';
import { ValidComponent } from './valid/valid.component';
import { NotValidComponent } from './not-valid/not-valid.component';
import { MenuComponent } from './shared/menu/menu.component';
import { Camerooncomponent } from './cameroon/camerooncomponent';
import {MozambiqueComponent} from "./mozambique/mozambique.component";
import {UgandaComponent} from "./uganda/uganda.component";

@NgModule({
  declarations: [
    AppComponent, MoroccoComponent, AllPhonesComponent, EthiopiaComponent, ValidComponent, NotValidComponent, MenuComponent, Camerooncomponent, MozambiqueComponent, UgandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
