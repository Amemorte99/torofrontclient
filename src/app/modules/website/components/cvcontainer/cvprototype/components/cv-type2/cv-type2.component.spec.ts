import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvType2Component } from './cv-type2.component';

describe('CvType2Component', () => {
  let component: CvType2Component;
  let fixture: ComponentFixture<CvType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvType2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
