import {Component, OnInit} from '@angular/core';
import {AccountService} from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
})
export class AppComponent implements OnInit{
  // title = 'Angular Demo';
  // oddNumber:number[]=[];
  // evenNumber:number[]=[];
  //
  //
  // onIntervalFired(FiredEvent: number) {
  //  if(FiredEvent%2==0)
  //  {
  //    this.evenNumber.push(FiredEvent);
  //  }
  //  else {
  //    this.oddNumber.push(FiredEvent);
  //  }
  // }
  accounts:{name:string,status:string}[]=[];
  constructor(private accountService:AccountService) {
  }
  ngOnInit(){
    this.accounts=this.accountService.accounts;

  }

}
