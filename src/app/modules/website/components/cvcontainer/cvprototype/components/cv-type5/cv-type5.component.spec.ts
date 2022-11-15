import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvType5Component } from './cv-type5.component';

describe('CvType5Component', () => {
  let component: CvType5Component;
  let fixture: ComponentFixture<CvType5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvType5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvType5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
