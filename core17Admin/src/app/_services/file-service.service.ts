import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {serverConfig} from '../../environments/environment';
import {Observable} from "rxjs";


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

  public updateElement(element): Observable<any> {

    const headersToSend = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');

    const options = {
      headers: headersToSend
    };

    const payload = JSON.stringify(element);

    const endpoint = serverConfig.SERVER_URL + serverConfig.ADMIN_PANEL_URL + serverConfig.ELEMENT_UPDATE;

    return this.http.post(endpoint, payload, options);

  }

}
