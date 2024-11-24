import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsUpperComponent } from './about-us-upper.component';

describe('AboutUsUpperComponent', () => {
  let component: AboutUsUpperComponent;
  let fixture: ComponentFixture<AboutUsUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsUpperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
