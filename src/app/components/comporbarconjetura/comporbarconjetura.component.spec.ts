import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComporbarconjeturaComponent } from './comporbarconjetura.component';

describe('ComporbarconjeturaComponent', () => {
  let component: ComporbarconjeturaComponent;
  let fixture: ComponentFixture<ComporbarconjeturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComporbarconjeturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComporbarconjeturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
