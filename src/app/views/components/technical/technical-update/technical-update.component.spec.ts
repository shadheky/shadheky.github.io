import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalUpdateComponent } from './technical-update.component';

describe('TechnicalUpdateComponent', () => {
  let component: TechnicalUpdateComponent;
  let fixture: ComponentFixture<TechnicalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
