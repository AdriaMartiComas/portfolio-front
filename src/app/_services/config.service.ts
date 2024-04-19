import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);

  sendEmail(emailBody: any) {

    return this.http.post('https://adriamarticomas.com/apiAdri/enviar', emailBody);
  }
}
