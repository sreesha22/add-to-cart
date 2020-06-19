import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() name: string;
  totalItem: any = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCount().subscribe(count => {
      this.totalItem = count
       console.log(count)
      }
      );
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }
  
}
