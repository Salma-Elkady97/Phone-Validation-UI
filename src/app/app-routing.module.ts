import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPhonesComponent } from './all-phones/all-phones.component';
import { MoroccoComponent } from './morocco/morocco.component';
import { EthiopiaComponent } from './ethiopia/ethiopia.component';
import { ValidComponent } from './valid/valid.component';
import { NotValidComponent } from './not-valid/not-valid.component';
import { Camerooncomponent } from './cameroon/camerooncomponent';
import {MozambiqueComponent} from "./mozambique/mozambique.component";
import {UgandaComponent} from "./uganda/uganda.component";

const routes: Routes = [
  {path:'allphones',component:AllPhonesComponent},
  {path:'morocco',component:MoroccoComponent},
  {path:'valid',component:ValidComponent},
  {path:'notvalid',component:NotValidComponent},
  {path:'Mozambique' , component:MozambiqueComponent},
  {path:'Uganda' , component:UgandaComponent},
  {path:'cameroon' , component:Camerooncomponent},
  {path:'ethiopia',component:EthiopiaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
