import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guards } from './guards';

describe('Guards', () => {
  let component: Guards;
  let fixture: ComponentFixture<Guards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guards],
    }).compileComponents();

    fixture = TestBed.createComponent(Guards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
