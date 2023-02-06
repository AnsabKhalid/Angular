import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { loggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [loggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private services: loggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
   }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.services.logStatusChange(accountStatus);
  }
}
