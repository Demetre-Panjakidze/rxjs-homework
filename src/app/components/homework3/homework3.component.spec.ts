import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework3Component } from './homework3.component';

describe('Homework3Component', () => {
  let component: Homework3Component;
  let fixture: ComponentFixture<Homework3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
