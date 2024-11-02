import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonObservationComponent } from './addon-observation.component';

describe('AddonObservationComponent', () => {
  let component: AddonObservationComponent;
  let fixture: ComponentFixture<AddonObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddonObservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddonObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
