import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollow',
  templateUrl: './hollow.component.html',
  styleUrls: ['./hollow.component.css']
})
export class HollowComponent implements OnInit {

  showIt = false;
  log =[];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClick() {
    this.showIt = !this.showIt;
    // this.log.push(this.log.length + 1);

    this.log.push(new Date());
  }

}
