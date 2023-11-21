import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStopComponent } from './button-stop.component';

describe('ButtonStopComponent', () => {
  let component: ButtonStopComponent;
  let fixture: ComponentFixture<ButtonStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
