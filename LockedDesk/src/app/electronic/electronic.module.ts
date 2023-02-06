import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ElectronicComponent } from "./electronic.component";
import { ElectronicDetailComponent } from "./electronic-detail/electronic-detail.component";
import { ElectronicEditComponent } from "./electronic-edit/electronic-edit.component";
import { ElectronicItemComponent } from "./electronic-list/electronic-item/electronic-item.component";
import { ElectronicListComponent } from "./electronic-list/electronic-list.component";
import { ElectronicStartComponent } from "./electronic-start/electronic-start.component";
import { ElectronicRoutingModule } from "./electronic-routing.module";


@NgModule({
    declarations: [
        ElectronicComponent,
        ElectronicDetailComponent,
        ElectronicListComponent,
        ElectronicItemComponent,
        ElectronicStartComponent,
        ElectronicEditComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        ElectronicRoutingModule
    ]
})
export class ElectronicModule {}