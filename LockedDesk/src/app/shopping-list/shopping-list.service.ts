import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable()

export class ShoppingListService {
    ingredintsAdded = new Subject<any>();
    startEditing = new Subject<number>();

    private ingredients = [
        // new Ingredient('Apples', 32),
        // new Ingredient('Mangoes', 20),
    ];

    devices = new Subject();

      getIngredient() {
          return this.ingredients.slice();
      }

      getIngredients(index: number) {
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredintsAdded.next(this.ingredients.slice());
      }
      
      transferIngredients(ingredients) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredintsAdded.next(this.ingredients.slice()); 
      }

      updateIngredients(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredintsAdded.next(this.ingredients.slice());
      }

      deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredintsAdded.next(this.ingredients.slice());
      }

 
      // transferElectronics(name, amount) {
      //   this.electronics.push(name, amount);
      //   this.ingredintsAdded.next(this.ingredients.slice);
      //   console.log(ingredients);
        
      // }

      // sendElectronics(devices) {
      //   this.devices.next(devices);
      //   console.log(devices);
      // }

      // getElectronics() {
      //   return this.devices.asObservable();
      // }

}