import { Component, OnInit } from '@angular/core';
import { Detail  } from 'src/app/interfaces/detail';
import { DetailService  } from '../../services/detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: Detail = {
    title: '',
    image: '',
    description: '',
    quantity: '',
    price: ''
  }
  submitted = false;

  details : any;
  constructor(private dservice: DetailService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getDetail(this.route.snapshot.paramMap.get('id'));
  }

  AllBuys() {
    this.dservice.getAllDetails().subscribe(data => {this.details = data; console.log(this.details); }, error => {console.log(error);})}
    
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


}

