import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-banner',
  templateUrl: './page-baner.component.html',
  styleUrls: ['./page-baner.component.css']
})
export class PageBanner implements OnInit {
  @Input("title") title: string;
  @Input("button") buttonText: string;
  @Input("href") href: string;

  //@Input("menu-item-names") menuNames: string[];

  //@Input("menu-item-links") nemuLinks: string;



  constructor() {

  }

  ngOnInit() {
  }

}

