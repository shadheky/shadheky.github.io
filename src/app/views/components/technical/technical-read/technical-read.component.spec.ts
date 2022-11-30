import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalReadComponent } from './technical-read.component';

describe('TechnicalReadComponent', () => {
  let component: TechnicalReadComponent;
  let fixture: ComponentFixture<TechnicalReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
