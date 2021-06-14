import { Component, OnInit } from '@angular/core';
import {Countryservice} from "../../services/countryservice";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  selectedCountry: string;
  private _httpClient:HttpClient;
  private _loginService:Countryservice;


  ngOnInit(): void {
  }


}
