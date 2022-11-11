import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvType1Component } from './cv-type1.component';

describe('CvType1Component', () => {
  let component: CvType1Component;
  let fixture: ComponentFixture<CvType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvType1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
