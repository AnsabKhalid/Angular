import { EventEmitter, Injectable } from "@angular/core";

import { loggingService } from "./logging.service";

@Injectable({
  providedIn: 'root',
})

export class AccountService {
    accounts = [
        {
          name: "Main Account",
          status:"Active"
        },
        {
          name: "Test Account",
          status:"InActive"
        },
        {
          name: "Other Account",
          status:"Unknown"
        },
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private service: loggingService) {}

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
      }
}