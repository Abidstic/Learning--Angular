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
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { Server1Component } from './servers/server1/server1.component';
import {ServersService} from "./servers/servers.service";


const routes: Routes=[
  {
    path:'', component:HomeComponent
  } ,
  {
    path:'users', component:UsersComponent
  } ,
  {
    path:'servers', component:ServersComponent
  }

]
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
    NewAccountComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    UserComponent,
    ServerComponent,
    Server1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // CourseService
    AccountService,
    LoggingService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
