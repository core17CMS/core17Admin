import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverConfig } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
    
   }

   public getTemplates() {
     console.log(serverConfig);
    return this.http.get(serverConfig.SERVER_URL + serverConfig.ADMIN_PANEL_URL + serverConfig.TEMPLATES_URL);
   }

}
