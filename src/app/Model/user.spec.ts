import { TestBed } from '@angular/core/testing';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('User', () => {
  let service: User;
  let httpClient: HttpClient;
  let observableInstance: Observable<any>; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User, HttpClient],
    });

    // Inject the required services
    service = TestBed.inject(User);
    httpClient = TestBed.inject(HttpClient);
    observableInstance = TestBed.inject(Observable);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
