import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buys  } from 'src/app/interfaces/buys';

const all_products = "https://m-betterbuys.herokuapp.com/api/products/"
const update_bus = "https://m-betterbuys.herokuapp.com/api/products/update/"
const delete_bus = "https://m-betterbuys.herokuapp.com/api/products/delete/"

@Injectable({
  providedIn: 'root'
})
export class BuysService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    console.log( this.http.get(all_products))
    return this.http.get(all_products)
  }




}
