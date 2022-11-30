import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDeleteComponent } from './technical-delete.component';

describe('TechnicalDeleteComponent', () => {
  let component: TechnicalDeleteComponent;
  let fixture: ComponentFixture<TechnicalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
