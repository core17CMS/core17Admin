import { Component, Input, OnInit, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ISitePageObject } from 'src/app/_interfaces/ISite.interface';

@Component({
  selector: 'core-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() localPageObject: ISitePageObject;
  

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
      console.log('localPageObject', this.localPageObject)
  }

}
