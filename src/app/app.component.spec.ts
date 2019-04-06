import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ZipcloudService} from './services/zipcloud.service';
import {Observable, of} from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const zipcloudServiceStub = {
      getAddressUsingZipcode: (): Observable<any> => {
        return of({});
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: ZipcloudService, useValue: zipcloudServiceStub}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
