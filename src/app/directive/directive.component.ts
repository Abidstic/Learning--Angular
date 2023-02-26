import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  onlyOdd = false;
  oddNumber=[1,3,5];
  evenNumber=[2,4];

}
