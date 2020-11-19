import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosrandomComponent } from './numerosrandom.component';

describe('NumerosrandomComponent', () => {
  let component: NumerosrandomComponent;
  let fixture: ComponentFixture<NumerosrandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosrandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
