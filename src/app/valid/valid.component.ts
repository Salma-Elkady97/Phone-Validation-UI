import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ValidService} from "../services/valid.service";
import {Customer} from "../models/customer";

@Component({
  selector: 'app-valid',
  templateUrl: './validcomponent.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent implements OnInit {

  constructor(private _httpClient:HttpClient,private _validService:ValidService) { }
  customers:Customer[]=[];
  ngOnInit(): void {
    this._validService.get().subscribe((data: any[])=>{
      console.log("dataaaaa == "+data);
      this.customers = data;
    })
  }

}
