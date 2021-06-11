import { Component, OnInit } from '@angular/core';
import { Detail  } from 'src/app/interfaces/detail';
import { DetailService  } from '../../services/detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Buys  } from 'src/app/interfaces/buys';
import { BuysService  } from '../../services/buys.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  buy: Buys = {
    title: '',
    image: '',
    short_description: '',
    quantity: '',
    price: ''
  }
  submitted = false;


  totalBuys : any;

  constructor(private dservice: DetailService, private activatedroute: ActivatedRoute, private bservice: BuysService,) { }

  ngOnInit(): void {
    this.AllBuys()
  }

  AllBuys() {
    this.bservice.getAllProducts().subscribe(data => {this.totalBuys = data; console.log(this.totalBuys); }, error => {console.log(error);})}

  deleteCart(id:any){
    this.totalBuys.splice(this.totalBuys.indexOf(this.buy), 1);    
  }
}
