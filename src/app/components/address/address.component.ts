import { Component, OnInit } from '@angular/core';
import { Address  } from 'src/app/interfaces/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address: Address = {
    location: '',
    description: '',
    phone: '',
  };

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveBusiness(): void {
    this.submitted = true;
  }

  addBusiness() {
    this.submitted = false;
    this.address = {
      location: '',
      description: '',
      phone: ''
    };
  }
}
