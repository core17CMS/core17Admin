import { Component } from '@angular/core';
import { FileService } from './../../_services/file-service.service';
import { ISite, ISitePageObject } from './../../_interfaces/ISite.interface';

@Component({
  selector: 'core-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

    public templates: any = {};
    public siteObject: ISite;
    public selectedPageToView: ISitePageObject | boolean;

  constructor(private fileService: FileService) {
    this.init();
  }

  public init(): void {

    this.fileService.getTemplates().subscribe((data: any) => {
      console.log(data);
      this.templates = JSON.stringify(data);
    }, 
    (error) => {
      this.templates = "ERROR"
    })

    this.fileService.getBase().subscribe((data: ISite) => {
        this.siteObject = data;
    }, 
    (error) => {
        console.log(error);
    })
  
}

public setSelectedPage(selectedPageObject: any): void {
  this.selectedPageToView = this.siteObject.pages.find(page => page.type === selectedPageObject.selectedPage);
  // this.selectedPageToView = {};
}

public resetPageStates(): void {
  this.selectedPageToView = false;
}

}
