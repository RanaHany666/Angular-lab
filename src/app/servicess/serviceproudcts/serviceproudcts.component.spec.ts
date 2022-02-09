import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproudctsComponent } from './serviceproudcts.component';

describe('ServiceproudctsComponent', () => {
  let component: ServiceproudctsComponent;
  let fixture: ComponentFixture<ServiceproudctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproudctsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproudctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
