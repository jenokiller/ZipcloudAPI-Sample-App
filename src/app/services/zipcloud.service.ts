import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ZipcloudService {
  constructor(private http: HttpClient) {}
  private apiEndPoint: string = 'http://zipcloud.ibsnet.co.jp/api/search';

  getAddressUsingZipcode(zipcode: string): Observable<any> {
    let httpParams = new HttpParams()
      .set('zipcode', zipcode);

    return this.http.jsonp<any>(`${this.apiEndPoint}?${httpParams.toString()}`, 'callback');
  }
}
