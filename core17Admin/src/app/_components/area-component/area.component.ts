import { Component, Input, OnInit, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {IAreaCollective, ISitePageObject} from 'src/app/_interfaces/ISite.interface';

@Component({
  selector: 'core-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() localAreaObject: any;
  public areaArray: any[];

  constructor() {
  }

//   0: "BLOG_AREA"
// 1: "BUTTON_AREA"
// 2: "FEATURE_AREA"
// 3: "FOOTER_AREA"
// 4: "GENERIC_AREA"
// 5: "JUMBOTRON_AREA"
// 6: "LINKLIST_AREA"
// 7: "NEWS_AREA"
// 8: "FORM_AREA"
// 9: "HEADER_AREA"
// 10: "TEXT_AREA"

  ngOnInit() {
    const localKeys = Object.entries(this.localAreaObject);
    for (const [key, value] of localKeys) {
      if (Array.isArray(value)) {
        this.areaArray = value;
      }
    }
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
      // console.log('localPageObject', this.localAreaObject)
  }

}
