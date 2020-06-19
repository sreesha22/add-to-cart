import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  count = 0;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  constructor( private http: HttpClient ) { }


  getCount(){
    return this.simpleObservable$;
  }
  addToCart(product) {
    this.items.push(product);
    this.count +=1;
    this.simpleObservable.next(this.count)
  }
 

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
