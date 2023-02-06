import { Component, Input, OnInit } from '@angular/core';

import { Electronic } from '../../electronic.model';

@Component({
  selector: 'app-electronic-item',
  templateUrl: './electronic-item.component.html',
  styleUrls: ['./electronic-item.component.css']
})
export class ElectronicItemComponent implements OnInit {
  @Input() electronic: Electronic;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void { }

}
