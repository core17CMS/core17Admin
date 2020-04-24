import {Component, Input, OnInit, OnChanges, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {IAreaCollective, ISitePageObject} from 'src/app/_interfaces/ISite.interface';

@Component({
  selector: 'core-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() localAreaObject: any;
  @Output() dataReloadRequired: EventEmitter<any> = new EventEmitter<any>();
  public areaArray: any[];

  constructor() {
  }

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
  }

  public reloadData(event) {
    this.dataReloadRequired.emit(event);
  }

}
