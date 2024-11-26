import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBottomComponent } from './about-us-bottom.component';

describe('AboutUsBottomComponent', () => {
  let component: AboutUsBottomComponent;
  let fixture: ComponentFixture<AboutUsBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
