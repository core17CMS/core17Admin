import {Component, OnChanges} from '@angular/core';
import {FileService} from './../../_services/file-service.service';
import {ISite, ISitePageObject} from './../../_interfaces/ISite.interface';

@Component({
  selector: 'core-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnChanges {

  public templates: any = {};
  public siteObject: ISite;
  public selectedPageToView: ISitePageObject | boolean;
  public selectedPageObjectCache: any;

  constructor(private fileService: FileService) {
    this.init();
  }

  public init(): void {

    this.fileService.getTemplates().subscribe((data: any) => {
        console.log(data);
        this.templates = JSON.stringify(data);
      },
      (error) => {
        this.templates = 'ERROR';
      });

    this.fileService.getBase().subscribe((data: ISite) => {
        this.siteObject = data;
      },
      (error) => {
        console.log(error);
      });

  }

  public setSelectedPage(selectedPageObject: any): void {
    this.selectedPageToView = this.siteObject.pages.find(page => page.type === selectedPageObject.selectedPage);
    this.selectedPageObjectCache = selectedPageObject;
  }

  public resetPageStates(): void {
    this.selectedPageToView = false;
  }

  public reloadData(event) {
    if (event.status === 'OK') {
      this.fileService.getBase().subscribe((data: ISite) => {
          this.siteObject = data;
          this.setSelectedPage(this.selectedPageObjectCache);
        },
        (error) => {
          console.log(error);
        });
    }
  }

  ngOnChanges() {
    // console.log(this.siteObject);
  }


}
