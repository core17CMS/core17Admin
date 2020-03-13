import { Component } from '@angular/core';
import { FileService } from './_services/file-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
