import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [ './list-item.component.css' ]
})
export class listItem  {
  @Input("title") title: string;
  @Input("img") img: string;
  @Input("href") href: string;
}