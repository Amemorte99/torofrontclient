import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvType3Component } from './cv-type3.component';

describe('CvType3Component', () => {
  let component: CvType3Component;
  let fixture: ComponentFixture<CvType3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvType3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
