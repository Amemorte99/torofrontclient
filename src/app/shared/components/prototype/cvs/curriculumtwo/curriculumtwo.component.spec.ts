import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumtwoComponent } from './curriculumtwo.component';

describe('CurriculumtwoComponent', () => {
  let component: CurriculumtwoComponent;
  let fixture: ComponentFixture<CurriculumtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
