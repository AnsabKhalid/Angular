import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CheckOutComponent } from "./check-out/check-out.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },

    // lazy-loading past approach
    // { path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule' },

        { path: 'recipes', loadChildren: 
        () => import ('./recipes/recipes.module').then(m => m.RecipesModule) },
        { path: 'shopping-list', loadChildren: 
        () => import ('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
        { path: 'auth', loadChildren: 
        () => import ('./auth/auth.module').then(m => m.AuthModule) },
        { path: 'electronic', loadChildren: 
        () => import('./electronic/electronic.module').then(m => m.ElectronicModule) },

        { path: 'check-out', component: CheckOutComponent }
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class appRoutingModule { }