import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { loggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [loggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private services: loggingService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.services.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }

}
