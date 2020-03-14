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
    return this.http.get(serverConfig.SERVER_URL + serverConfig.ADMIN_PANEL_URL + serverConfig.TEMPLATES_URL);
   }

   public getBase() {
    return this.http.get(serverConfig.SERVER_URL + serverConfig.ADMIN_PANEL_URL + serverConfig.BASE_CONTENT_URL);
   }

}
