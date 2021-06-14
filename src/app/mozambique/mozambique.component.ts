import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Countryservice} from "../services/countryservice";
import {Customer} from "../models/customer";


@Component({
  selector: 'app-Mozambique',
  templateUrl: './mozambique.component.html',
  styleUrls: ['./mozambique.component.css']
})
export class MozambiqueComponent implements OnInit {


  constructor(private _httpClient:HttpClient,private _countryService:Countryservice) {
    console.log("constructor");
  }
  customers: Customer[]=[];

  ngOnInit(): void {
        this._countryService.get('Mozambique').subscribe((data: any[]) => {
          console.log("dataaaaa == " + data);
          this.customers = data;
        })


  }


}
