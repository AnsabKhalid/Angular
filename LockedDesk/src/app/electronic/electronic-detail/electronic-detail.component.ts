import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

import { Electronic } from '../electronic.model';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.css']
})
export class ElectronicDetailComponent implements OnInit {
  electronic: Electronic;
  id: number;
  
  constructor(private electronicService: ElectronicService,
              private shoppingListService: ShoppingListService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.electronic = this.electronicService.getElectronic(this.id);
        }
      );
  }

  onAddShoppingList() {
    this.electronicService.addElectronicToShoppingList(this.electronic.ingredients);
  }

  // onAddShoppingList() {
  //   this.shoppingListService.sendElectronics(this.electronic);
  // }
}
