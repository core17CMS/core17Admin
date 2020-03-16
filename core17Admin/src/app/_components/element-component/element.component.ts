import { Component, Input, OnInit, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { IElementCollective } from 'src/app/_interfaces/ISite.interface';

@Component({
  selector: 'core-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() localElementObject: IElementCollective;


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
      // console.log('localPageObject', this.localElementObject)
  }

}
