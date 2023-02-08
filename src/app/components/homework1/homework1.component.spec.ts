import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework1Component } from './homework1.component';

describe('Homework1Component', () => {
  let component: Homework1Component;
  let fixture: ComponentFixture<Homework1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
