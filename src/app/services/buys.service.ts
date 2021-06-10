import { Injectable } from '@angular/core';

const all_products = "https://m-betterbuys.herokuapp.com/api/products/"
const update_bus = "https://m-betterbuys.herokuapp.com/api/products/update/"
const delete_bus = "https://m-betterbuys.herokuapp.com/api/products/delete/"

@Injectable({
  providedIn: 'root'
})
export class BuysService {

  constructor() { }
}
