import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocsService implements Resolve<any> {

  constructor(
    private http: HttpClient,
  ) { }

  resolve() {
    const configUrl = './assets/app/modules/docs/json/menu.data.json';
    return this.http.get(configUrl).toPromise().then(data => {
      return data;
    });
  }

}
