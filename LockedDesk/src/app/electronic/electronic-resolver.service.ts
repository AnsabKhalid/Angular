import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Electronic } from "./electronic.model";
import { ElectronicService } from "./electronic.service";

@Injectable({providedIn: 'root'})
export class ElectronicResolverService implements Resolve<Electronic[]> {

    constructor(private electronicService: ElectronicService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const electronic = this.electronicService.getElectronics();

        if(electronic.length === 0) {
            return this.electronicService.fetchElectronics();
        }  else {
            return electronic;
        }
        
    }
}