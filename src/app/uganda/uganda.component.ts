import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Countryservice} from "../services/countryservice";
import {Customer} from "../models/customer";

@Component({
  selector: 'Uganda',
  templateUrl: './uganda.component.html',
  styleUrls: ['./uganda.component.css']
})
export class UgandaComponent implements OnInit {

  selectedCountry:string;
  constructor(private _httpClient:HttpClient,private _countryService:Countryservice) {
    console.log("constructor");
  }
  customers: Customer[]=[];

  ngOnInit(): void {
    console.log("(this.selectedCountry) == "+ this.selectedCountry);
        this._countryService.get('Uganda').subscribe((data: any[]) => {
          console.log("data = " + data);
          this.customers = data;
        })


  }


}
