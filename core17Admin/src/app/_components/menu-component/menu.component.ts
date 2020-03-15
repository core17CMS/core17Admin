import { Component, Input, AfterContentInit, OnInit, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ISite } from 'src/app/_interfaces/ISite.interface';
// import {  } from 'protractor';
// import { FileService } from '../../_services/file-service.service';

@Component({
  selector: 'core-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() siteObject: ISite;
  @Output() selectedPage: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnChanges() {
  }

  public clickPageElement(page: string): any {
    this.selectedPage.emit({ selectedPage: page });
  }

}
