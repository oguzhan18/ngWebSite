import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricebarComponent } from './pricebar.component';

describe('PricebarComponent', () => {
  let component: PricebarComponent;
  let fixture: ComponentFixture<PricebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
