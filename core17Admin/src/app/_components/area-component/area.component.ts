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

  ngOnInit() {
    const localKeys = Object.entries(this.localAreaObject);
    for (const [key, value] of localKeys) {
      console.log(Array.isArray(value));
    }
    // console.log(this.localAreaObject)
    // for (const prop in this.localAreaObject) {
    //   console.log(this.localAreaObject.hasOwnProperty(prop));
    //   if (Array.isArray(prop)) {
    //
    //     this.areaArray = prop;
    //   }
    // }
    // console.log(this.areaArray);
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
      // console.log('localPageObject', this.localAreaObject)
  }

}
