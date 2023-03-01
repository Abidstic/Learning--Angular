import {Component} from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
    <h3>Success {{name}}.Your {{'server1'}} is {{getSuccessPort()}}</h3>`,
  styles: [
      `h3 {
      padding: 20px;
      background-color: #698f69;
      border: 2px darkgreen;
    }`
  ]
})

export class SuccessAlertComponent {

  name: string = "Abid";
  serverPort: number = 4000;

  getSuccessPort() {
    return this.serverPort;

  }


}
