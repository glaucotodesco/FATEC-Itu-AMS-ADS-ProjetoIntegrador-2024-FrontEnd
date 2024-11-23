import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareTableComponent } from './square-table.component';

describe('SquareTableComponent', () => {
  let component: SquareTableComponent;
  let fixture: ComponentFixture<SquareTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquareTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
