import { Component, OnInit } from '@angular/core';
import { Detail  } from 'src/app/interfaces/detail';
import { DetailService  } from '../../services/detail.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  detail: Detail = {
    title: '',
    image: '',
    description: '',
    quantity: '',
    price: ''
  }

  details : any;

  constructor(private dservice: DetailService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getDetail(this.route.snapshot.paramMap.get('id'));
  }

  getDetail(id: string | null) {
    this.dservice.getById(id)
      .subscribe(
        data => {
          this.details = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  addCart() {
    const data = {
      title: this.detail.title,
      // email: this.business.email,
      // neighborhood: this.business.neighborhood,
    };
  }

}
