import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Countryservice {

  constructor(private _httpClient:HttpClient) { }

  get(country:string):Observable<any>{
   return this._httpClient.get("http://localhost:8888/customers/phones?country="+country);
  }



}
