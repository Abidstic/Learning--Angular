import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService:LoggingService,private accountService:AccountService) {
    this.accountService.statusChanged.subscribe((status:string)=>alert('New Status'+ status));
    this.accountService.accountAdded.subscribe((account:{name:string,status:string})=>
      alert('New Account name is :  '+account.name+' status: '+account.status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    this.accountService.accountAdded.emit({name:accountName, status:accountStatus});
  }

}
