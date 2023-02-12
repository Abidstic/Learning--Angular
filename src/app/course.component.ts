import {Component} from "@angular/core";
import {CourseService} from "./course.service";

@Component({
  selector: 'courses',
  template: `<!--<h2>{{getTitle()}}</h2>-->
  <!--    <ul>-->
  <!--      <li *ngFor="let course of courses">-->
  <!--        {{course}}-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--    <img src="{{imageUrl}}"/>&lt;!&ndash;  interpolation&ndash;&gt;-->
  <!--    <img [src]="imageUrl"/> &lt;!&ndash; property binding&ndash;&gt;-->
  <!--    <table>-->
  <!--      <tr>-->
  <!--        <td [attr.colspan]="colSpan"></td>-->
  <!--      </tr>-->
  <!--    </table>-->
<!--  <button (click)="onSave($event)" class="btn btn-dark" [style.backgroundColor]="isActive? 'blue' : 'red'">Save</button>-->
<!--  <br/>-->
<!--  {{info.name | uppercase }}<br/>-->
<!--  {{info.friends | number}}<br/>-->
<!--  {{info.rating | number :'1.2-10'}}<br/>-->
<!--  {{info.salary | currency:'BDT' : true :'3.1-1'}}<br/>-->
<!--  {{info.birthDate | date:'longDate'}}<br/>-->
<!--  {{text|summary : 25}}-->
  `
})
export class CourseComponent {
  title = "List of courses!!!!";
  courses;
  imageUrl = "https://picsum.photos/seed/picsum/200/300";
  // colSpan= 2;
  isActive = true;
  info = {
    name: "abid",
    rating: 0.0000045955,
    salary: 15000.3654,
    friends: 58,
    birthDate: new Date(2001, 11, 21, 5, 30, 59, 100)

  }
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Vitae nunc sed velit dignissim sodales ut eu. In hac habitasse platea dictumst vestibulum rhoncus est. Id eu nisl nunc mi ipsum. Fusce id velit ut tortor pretium viverra suspendisse. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Id leo in vitae turpis massa sed elementum. Facilisi etiam dignissim diam quis. Ac ut consequat semper viverra nam libero. Tortor dignissim convallis aenean et.`;


  getTitle() {
    return this.title;
  }

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  onSave($event: MouseEvent) {
    this.isActive = (this.isActive ? false : true);
    console.log("button pressed", $event.clientX);
  }

}

