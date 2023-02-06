import { Injectable } from "@angular/core";

@Injectable()

export class loggingService {
    logStatusChange(status: string) {
        console.log('A server status changed: ' + status);
    }
    
}