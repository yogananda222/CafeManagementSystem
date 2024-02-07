import { TestBed } from '@angular/core/testing';

import { CafeManagementService } from './cafe-management-service'; 

describe('CafeManagementService', () => {
  let service: CafeManagementService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeManagementService]
    });
    service = TestBed.inject(CafeManagementService);
  });
  
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
