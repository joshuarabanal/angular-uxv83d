import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parallax',
  templateUrl: './parallax.component.html',
  styleUrls: [ './parallax.component.css' ]
})
export class Parallax  {
  @Input("img") img: string;
   constructor() {

  }
  public getURL(){
    return "url("+this.img+")";
  }

  ngOnInit() {
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/