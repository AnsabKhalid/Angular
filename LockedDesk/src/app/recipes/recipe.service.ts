import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
 
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

    recipeChanged = new Subject<recipe[]>();

// private recipes: recipe[] = [
//         new recipe(
//             'this is a recipe', 
//             'description of recipe',
//         'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg',
//          [
//              new Ingredient('Potatoes', 2),
//              new Ingredient('Carrots', 2),
//              new Ingredient('Cucumber', 2)
//          ]),

//         new recipe(
//             'this is another recipe',
//              'description of recipe',
//         'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
//          [
//             new Ingredient('Potatoes', 2),
//             new Ingredient('Carrots', 2),
//             new Ingredient('Cucumber', 2)
//          ]),

//          new recipe(
//             'this is another recipe',
//              'description of recipe',
//         'https://servicethatsells.com/upload_path/2016/10/10-12-13-Dessert-Sales.jpg',
//          [
//             new Ingredient('Potatoes', 2),
//             new Ingredient('Carrots', 2),
//             new Ingredient('Cucumber', 2)
//          ])
//     ];

 private recipes: recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipes(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientToShoppingList(ingredient: Ingredient[]) {
         this.shoppingListService.transferIngredients(ingredient);
    }

    addRecipe(recipe: recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}