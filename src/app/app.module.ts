import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
// import {CourseComponent} from "./course.component";
// import {CourseService} from "./course.service";
// import {SummaryPipe} from "./summary.pipe";
import {ServerComponent } from './server/server.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import { ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import { RecipeComponent } from './recipe/recipe.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { DirectiveComponent } from './directive/directive.component';
import {BasicHighlightDirective} from "./basicHighLight/basic-highlight.directive";
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {AccountService} from "./account.service";
import {LoggingService} from "./logging.service";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    // CourseComponent,
    // SummaryPipe,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HeaderComponent,
    RecipeComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // CourseService
    AccountService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
