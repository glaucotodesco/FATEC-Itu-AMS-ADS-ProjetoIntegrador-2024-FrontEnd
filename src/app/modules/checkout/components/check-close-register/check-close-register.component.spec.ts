import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCloseRegisterComponent } from './check-close-register.component';

describe('CheckCloseRegisterComponent', () => {
  let component: CheckCloseRegisterComponent;
  let fixture: ComponentFixture<CheckCloseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckCloseRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckCloseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
