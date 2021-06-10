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

  totalBuys : any;

  details : any;

  constructor(private bservice: BuysService, private dservice: DetailService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.AllBuys()
    this.getDetail(this.route.snapshot.paramMap.get('id'));
  }

  AllBuys() {
    this.bservice.getAllProducts().subscribe(data => {this.totalBuys = data; console.log(this.totalBuys); }, error => {console.log(error);})}
    
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




    itemsCart:any = [];
    //   addCart(category){
    //     let cartDataNull = 
    //   localStorage.getItem('localCart');
    //     if(cartDataNull == null){
    //       let storeDataGet:any = [];
    //     storeDataGet.push(category);
    //       localStorage.setItem
    //         ('localCart', 
    //      JSON.stringify(storeDataGet));
    //     }
    //     else{
    //       var id = category.prodId;
    //       let index:number = -1;
    //       this.itemsCart = 
    //     JSON.parse
    // (localStorage.getItem
    // ('localCart'));
    // for
    // (let i=0; i<this.itemsCart.length; 
    // i++){
    // if(parseInt(id) === 
    // parseInt(this.itemsCart[i].prodId))
    // {
    //         this.itemsCart[i].qnt = 
    // category.qnt;
    //           index = i;
    //           break;
    //         }
    //       }
    //       if(index == -1){
    // this.itemsCart.push(category);
    //         localStorage.setItem
    // ('localCart', JSON.stringify
    // (this.itemsCart));
    //       }
    //       else{
    //         localStorage.setItem
    // ('localCart', JSON.stringify
    // (this.itemsCart));
    //       }
    //     }
    //     this.cartNumberFunc();
    //   }
    
    //  cartNumber:number = 0;
    //  cartNumberFunc(){
    //    var cartValue = 
    // JSON.parse
    // (localStorage.getItem
    // ('localCart'));
    //    this.cartNumber = 
    // cartValue.length;
    //    this.auth.cartSubject.next
    // (this.cartNumber);
    //  }
    
    
    
}
