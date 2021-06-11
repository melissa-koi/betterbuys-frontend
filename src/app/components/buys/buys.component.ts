import { Component, OnInit } from '@angular/core';
import { Buys  } from 'src/app/interfaces/buys';
import { BuysService  } from '../../services/buys.service';
import { Detail  } from 'src/app/interfaces/detail';
import { DetailService  } from '../../services/detail.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.scss']
})
export class BuysComponent implements OnInit {

  buy: Buys = {
    title: '',
    image: '',
    short_description: '',
    quantity: '',
    price: ''
  }
  submitted = false;

  totBuys : any;

  details : any;

  constructor(private bservice: BuysService, private dservice: DetailService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.AllBuys()
  }

  AllBuys() {
    this.bservice.getAllProducts().subscribe(data => {this.totBuys = data; console.log(this.totBuys); }, error => {console.log(error);})}
    
  getDetail(id: any) {
    this.dservice.getById(id)
      .subscribe(
        data => {
          this.details = data;
          console.log(this.details);
        },
        error => {
          console.log(error);
        });
  }

 
}
