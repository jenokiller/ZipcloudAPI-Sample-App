import { Component } from '@angular/core';
import {ZipcloudService} from './services/zipcloud.service';

@Component({
  selector: 'zipcloud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiResponse: any = null;
  zipcode = '';
  errorMessage: string;

  constructor(private zipcloudService: ZipcloudService) {}
  getAddress() {
    this.errorMessage = '';
    if (this.zipcode.length === 7) {
      this.zipcloudService.getAddressUsingZipcode(this.zipcode).subscribe(
        res => {
          this.apiResponse = res;
        },
        error => {
          this.errorMessage = '郵便番号検索に失敗しました。';
        }
      );
    } else {
      this.errorMessage = '適切な郵便番号を入力してください。';
    }
  }
}
