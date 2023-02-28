import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";
@Injectable()
export class AccountService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor(private loggingService:LoggingService) {
  }
  statusChanged = new EventEmitter<string>();
  accountAdded=new EventEmitter<{name: string, status: string}>();
  addAccount(name:string, status:string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);


  }
  updateStatus(id:number, status:string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);

  }

}
