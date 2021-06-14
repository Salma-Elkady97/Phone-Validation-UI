import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotvalidService} from "../services/notvalid.service";
import {Customer} from "../models/customer";

@Component({
  selector: 'app-NotValidComponent',
  templateUrl: './not-valid.component.html',
  styleUrls: ['./not-valid.component.css']
})
export class NotValidComponent implements OnInit {

  constructor(private _httpClient:HttpClient,private _notvalid:NotvalidService) { }
  customers:Customer[]=[];

  ngOnInit(): void {
    this._notvalid.get().subscribe((data: any[])=>{
      console.log("dataaaaa == "+data);
      this.customers = data;
    })
  }

}
