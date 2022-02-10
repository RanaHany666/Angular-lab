import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdiscountComponent } from './withdiscount.component';

describe('WithdiscountComponent', () => {
  let component: WithdiscountComponent;
  let fixture: ComponentFixture<WithdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
