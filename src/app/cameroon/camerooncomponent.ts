import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {NotvalidService} from "../services/notvalid.service";
import {Countryservice} from "../services/countryservice";
import {Customer} from "../models/customer";
import {absoluteFromSourceFile} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-Cameroon',
  templateUrl: './cameroon.component.html',
  styleUrls: ['./cameroon.component.css']
})
export class Camerooncomponent implements OnInit {

  selectedCountry:string;
  constructor(private _httpClient:HttpClient,private _countryService:Countryservice) {
    console.log("constructor");
  }
  customers: Customer[]=[];

  ngOnInit(): void {
    console.log("(this.selectedCountry) == "+ this.selectedCountry);
        this._countryService.get('Cameroon').subscribe((data: any[]) => {
          console.log("dataaaaa == " + data);
          this.customers = data;
        })


  }


}
