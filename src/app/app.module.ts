import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

//material elements
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatStepperModule } from "@angular/material/stepper";
import {MatButtonModule} from '@angular/material/button';
//import {MatButtonModule} from '@angular/material/button'
//import {MatInputModule} from '@angular/material/input';

//basic components
import { ActionBarComponent } from "./basic-components/action-bar/action-bar.component";
import { ActionButton } from "./basic-components/action-bar/action-button/action-button.component";
import { PageComponent } from "./basic-components/page/page.component";
import { PageSection } from "./basic-components/page/page-section/page-section.component";
import { PageBanner } from "./basic-components/page/page-banner/page-baner.component";
import { Parallax } from "./basic-components/parallax/parallax.component";
import { listItem } from "./basic-components/menu/list-item/list-item.component";

//domain components
import { NotateRoot } from "./urls/root/notate-root.component";
import { HelpPage } from "./urls/help/root.component";
//import { HelpMeUsePage } from "./urls//help-me-use/help-me-use.component";
import { HelpMeUsePage } from "./urls/help-me-use/help-me-use.component";
//directives
import { AnimateOnScroll } from "./basic-components/page/page-section/page-section.directive";
import { ColorSplitterComponent } from "./basic-components/page/color-splitter/color-splitter.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      //{ path: '', component: DomainPickerComponent },
      { path: "help.html", component: HelpPage },
      { path: "help_me_use.html", component: HelpMeUsePage },
      { path: "", component: NotateRoot }
      //{path:"arise/signup.html", component: AriseSignUp}
    ])

    //MatButtonModule,//material components
  ],
  declarations: [
    //web pages
    NotateRoot,
    HelpPage,
    HelpMeUsePage,

    AppComponent,
    ActionBarComponent,
    PageComponent,
    PageSection,
    Parallax,
    ActionButton,
    PageBanner,
    AnimateOnScroll,
    ColorSplitterComponent,
    listItem
    //MatToolbar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
