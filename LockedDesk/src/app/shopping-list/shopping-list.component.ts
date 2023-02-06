import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Electronic } from '../electronic/electronic.model';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients = [];
  private ingChangeSub: Subscription;

  electronics = [];

  cartTotal = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.ingChangeSub = this.shoppingListService.ingredintsAdded
          .subscribe(
            (ingredients) => {
              this.ingredients = ingredients;
            }
          );

          // this.electronics = this.shoppingListService.getElectronic();
          
          
          // this.shoppingListService.getElectronics()
          // .subscribe(
          //   (devices: Electronic) => {
          //   this.electronics.push({
          //     name: devices.name,
          //     amount: devices.amount
          //   });
          //   console.log(this.electronics);
          // });

      this.ingredients.forEach(products => {
      this.cartTotal += (products.amount);
    })      
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }

  ngOnDestroy() {
    this.ingChangeSub.unsubscribe();
  }

}
