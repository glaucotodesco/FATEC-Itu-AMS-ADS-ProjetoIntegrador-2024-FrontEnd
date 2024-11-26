import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMiddleComponent } from './about-us-middle.component';

describe('AboutUsMiddleComponent', () => {
  let component: AboutUsMiddleComponent;
  let fixture: ComponentFixture<AboutUsMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsMiddleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
