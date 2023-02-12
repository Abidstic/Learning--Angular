import { Component } from '@angular/core';
import {EmailService} from "../email.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
//   template: `<!--<ul>-->
// <!--    <li *ngFor="let author of authors">-->
// <!--      {{author}}-->
//
// <!--    </li>-->
// <!--  </ul>-->`
 })
export class CoursesComponent {
  // authors
  // constructor(service: EmailService) {
  //   this.authors= service.getAuthors();
  //
  // }
  post={
    title:"Title",
    isFavourite: true
  }




}
