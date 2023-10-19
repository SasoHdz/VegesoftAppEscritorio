import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductoComponent } from './prducto.component';

describe('PrductoComponent', () => {
  let component: PrductoComponent;
  let fixture: ComponentFixture<PrductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
