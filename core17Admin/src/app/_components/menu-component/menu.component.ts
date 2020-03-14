import { Component, Input, AfterContentInit, OnInit, OnChanges, AfterViewInit,  } from '@angular/core';
import { ISite } from 'src/app/_interfaces/ISite.interface';
// import { FileService } from '../../_services/file-service.service';

@Component({
  selector: 'core-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() siteObject: ISite;

  constructor() {
  }

  ngOnInit() {
    console.log('init')
    console.log(this.siteObject);
  }

  ngAfterViewInit() {
    console.log('view')
    console.log(this.siteObject)
  }

  ngOnChanges() {
    console.log('changes')
    console.log(this.siteObject)
  }

}
