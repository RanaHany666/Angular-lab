import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedclassesandtypesComponent } from './sharedclassesandtypes.component';

describe('SharedclassesandtypesComponent', () => {
  let component: SharedclassesandtypesComponent;
  let fixture: ComponentFixture<SharedclassesandtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedclassesandtypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedclassesandtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
