import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidService {

  constructor(private _httpClient:HttpClient) { }

  get():Observable<any>{
   return this._httpClient.get("http://localhost:8888/customers/phones/valid");
  }



}
