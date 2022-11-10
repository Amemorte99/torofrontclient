import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvcontainerComponent } from './cvcontainer.component';

describe('CvcontainerComponent', () => {
  let component: CvcontainerComponent;
  let fixture: ComponentFixture<CvcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
