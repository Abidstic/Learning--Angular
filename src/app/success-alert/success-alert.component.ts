import {Component} from "@angular/core";

@Component({
  selector:'app-success-alert',
  template:`
  <h3> This is a success message.</h3>`,
  styles: [
    `h3 {
      padding: 20px;
      background-color: #698f69;
      border: 2px darkgreen;
    }`


  ]


})

export class SuccessAlertComponent{

}
