import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvType4Component } from './cv-type4.component';

describe('CvType4Component', () => {
  let component: CvType4Component;
  let fixture: ComponentFixture<CvType4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvType4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvType4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
