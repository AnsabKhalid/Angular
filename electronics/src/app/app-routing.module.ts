import { NgModule } from "@angular/core";

import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/electronic', pathMatch: 'full' },
    { 
      path: 'electronic', 
      loadChildren: () => import('./electronic/electronic.module').then(m => m.ElectronicModule) 
  }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}