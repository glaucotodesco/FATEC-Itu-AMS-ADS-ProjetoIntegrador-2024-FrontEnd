import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTabsComponent } from './remove-tabs.component';

describe('RemoveTabsComponent', () => {
  let component: RemoveTabsComponent;
  let fixture: ComponentFixture<RemoveTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
