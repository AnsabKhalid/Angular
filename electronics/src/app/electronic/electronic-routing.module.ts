import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ElectronicDetailComponent } from "./electronic-detail/electronic-detail.component";
import { ElectronicEditComponent } from "./electronic-edit/electronic-edit.component";
import { ElectronicResolverService } from "./electronic-resolver.service";
import { ElectronicStartComponent } from "./electronic-start/electronic-start.component";
import { ElectronicComponent } from "./electronic.component";

const routes: Routes = [
    { path: '', component: ElectronicComponent, children: [
        { path: '', component: ElectronicStartComponent },
        { path: 'new', component: ElectronicEditComponent },
        { 
        path: ':id', 
        component: ElectronicDetailComponent, 
        resolve: [ElectronicResolverService] 
    }]
     },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ElectronicRoutingModule {

}