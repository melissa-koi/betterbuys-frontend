import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const all_details = "https://m-betterbuys.herokuapp.com/api/products/"
const update_details = "https://m-betterbuys.herokuapp.com/api/products/update/"
const delete_details = "https://m-betterbuys.herokuapp.com/api/products/delete/"

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  getAllDetails() {
    console.log( this.http.get(all_details))
    return this.http.get(all_details)
  }

  getById(id: any) {
    return this.http.get(`${update_details}${id}/`)
  }
}
