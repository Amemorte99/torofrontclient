import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvprototypeComponent } from './cvprototype.component';

describe('CvprototypeComponent', () => {
  let component: CvprototypeComponent;
  let fixture: ComponentFixture<CvprototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvprototypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvprototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
