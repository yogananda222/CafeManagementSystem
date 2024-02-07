import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiDialogComponent } from './upi-dialog.component';

describe('UpiDialogComponent', () => {
  let component: UpiDialogComponent;
  let fixture: ComponentFixture<UpiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpiDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
