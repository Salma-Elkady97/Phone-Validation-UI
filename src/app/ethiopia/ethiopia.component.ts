import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Countryservice} from "../services/countryservice";
import {Customer} from "../models/customer";

@Component({
  selector: 'ethiopia',
  templateUrl: './ethiopia.component.html',
  styleUrls: ['./ethiopia.component.css']
})
export class EthiopiaComponent implements OnInit {

  constructor(private _httpClient:HttpClient,private _countryService:Countryservice) { }
  customers: Customer[]=[];
  ngOnInit(): void {
    this._countryService.get('Ethiopia').subscribe((data: any[]) => {
      console.log("dataaaaa == " + data);
      this.customers = data;
    })

  }


}
