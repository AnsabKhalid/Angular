import { Component, OnInit } from '@angular/core';

import { Electronic } from './electronic.model';


@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  selectedElectronic: Electronic;

  constructor() { }

  ngOnInit(): void {
  }

}
