import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';
  oddNumber:number[]=[];
  evenNumber:number[]=[];


  onIntervalFired(FiredEvent: number) {
   if(FiredEvent%2==0)
   {
     this.evenNumber.push(FiredEvent);
   }
   else {
     this.oddNumber.push(FiredEvent);
   }
  }
}
