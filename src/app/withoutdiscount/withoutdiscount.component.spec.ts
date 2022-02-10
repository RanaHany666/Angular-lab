import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutdiscountComponent } from './withoutdiscount.component';

describe('WithoutdiscountComponent', () => {
  let component: WithoutdiscountComponent;
  let fixture: ComponentFixture<WithoutdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
