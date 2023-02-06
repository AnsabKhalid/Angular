import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Electronic } from "./electronic.model";

@Injectable({providedIn: 'root'})

export class ElectronicService {
  electronicChanged = new Subject<Electronic[]>();

    private electronics: Electronic[] = [
      // new Electronic(
      //               'this is a recipe', 
      //               40000,
      //               'description of recipe',
      //           'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg',
      //            [
      //                new Ingredient('Potatoes', 2),
      //                new Ingredient('Carrots', 2),
      //            ])
    ];

      constructor(private shoppingListService: ShoppingListService,
                  private http: HttpClient) { }

      setElectronics(electronics: Electronic[]) {
        this.electronics = electronics;
        this.electronicChanged.next(this.electronics.slice());
      }

      getElectronics() {
        return this.electronics.slice();
      }

      getElectronic(index: number) {
        return this.electronics[index];
      }

      addElectronics(electronic: Electronic) {
        this.electronics.push(electronic);
        this.electronicChanged.next(this.electronics.slice());
      }

      storeElectronics() {
        const electronics = this.getElectronics();
        this.http
          .put('https://ng-lockeddesk-recipe-book-default-rtdb.firebaseio.com/electronics.json', electronics)
              .subscribe(response => {
                console.log(response);
              });     
      }

      fetchElectronics() {
        return this.http
          .get<Electronic[]>('https://ng-lockeddesk-recipe-book-default-rtdb.firebaseio.com/electronics.json').pipe(
              tap(electronics => {
                this.setElectronics(electronics);
              })
          )      
      } 

      addElectronicToShoppingList(ingredient: Ingredient[]) {
        this.shoppingListService.transferIngredients(ingredient);
      }

}