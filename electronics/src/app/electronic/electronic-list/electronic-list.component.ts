import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Electronic } from '../electronic.model';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {
  electronics: Electronic[];

  constructor(private electronicService: ElectronicService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.electronicService.electronicChanged
          .subscribe(
            (electronics: Electronic[]) => {
              this.electronics = electronics;
            }
          );
    this.electronics = this.electronicService.getElectronics();
  }

  onNewElectronic() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSaveData() {
    this.electronicService.storeElectronics();
  }

  onFetchData() {
    this.electronicService.fetchElectronics().subscribe();
  }

}
