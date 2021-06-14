import { Component, OnInit } from '@angular/core';
import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Allphonesservice } from '../services/allphonesservice';

@Component({
  selector: 'app-AllPhonesComponent',
  templateUrl: './all-phones.component.html',
  styleUrls: ['./all-phones.component.css']
})
export class AllPhonesComponent implements OnInit {


  customers: Customer[] = [];

  constructor(private _httpClient: HttpClient, private _allphonesservice: Allphonesservice) {
  }

  ngOnInit(): void {
    this._allphonesservice.get().subscribe((data: any[]) => {
      console.log("data = " + data);
      this.customers = data;
    })

  }
}
