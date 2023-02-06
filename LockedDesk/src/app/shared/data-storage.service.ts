import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { RecipeService } from "../recipes/recipe.service";
import { recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    
    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService, 
        private authService: AuthService
        ) { }

    storeRecipe() {
        const recipes = this.recipeService.getRecipe();
        this.http.put(
            'https://ng-lockeddesk-recipe-book-default-rtdb.firebaseio.com/recipes.json',
        recipes
        )
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipe() {
            return this.http.get<recipe[]>(
                'https://ng-lockeddesk-recipe-book-default-rtdb.firebaseio.com/recipes.json',
            ).pipe(
        map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe,
                     ingredients: recipe.ingredients ? recipe.ingredients : []
                 };
            });
        }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}