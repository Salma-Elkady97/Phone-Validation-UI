import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Countryservice} from "../services/countryservice";
import {Customer} from "../models/customer";

@Component({
  selector: 'morocco',
  templateUrl: './morocco.component.html',
  styleUrls: ['./morocco.component.css']
})
export class MoroccoComponent implements OnInit {

  constructor(private _httpClient:HttpClient,private _countryService:Countryservice) { }
  customers: Customer[]=[];
  ngOnInit(): void {
    this._countryService.get('Morocco').subscribe((data: any[]) => {
      console.log("dataaaaa == " + data);
      this.customers = data;
    })
  }



}
