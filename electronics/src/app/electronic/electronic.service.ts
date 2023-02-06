import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";

import { Electronic } from "./electronic.model";

@Injectable({providedIn: 'root'})

export class ElectronicService {
  electronicChanged = new Subject<Electronic[]>();

    private electronics: Electronic[] = [];

      constructor(private http: HttpClient) { }

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
          .put('https://ng-lockeddesk-electronics-default-rtdb.firebaseio.com/electronics.json', electronics)
              .subscribe(response => {
                console.log(response);
              });     
      }

      fetchElectronics() {
        return this.http
          .get<Electronic[]>('https://ng-lockeddesk-electronics-default-rtdb.firebaseio.com/electronics.json').pipe(
              tap(electronics => {
                this.setElectronics(electronics);
              })
          )      
      } 

}