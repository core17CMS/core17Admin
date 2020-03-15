import { Component } from '@angular/core';
import { FileService } from '../../_services/file-service.service';

@Component({
  selector: 'core-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'core17Admin';

  constructor(private fileService: FileService) {
    this.init();
  }

  public init(): void {
    this.fileService.getTemplates().subscribe((data: any) => {
      console.log(data);
      this.title = JSON.stringify(data);
    }, 
    (error) => {
      this.title = "ERROR"
    })
  }

}
