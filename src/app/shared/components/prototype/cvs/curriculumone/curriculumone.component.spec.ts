import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumoneComponent } from './curriculumone.component';

describe('CurriculumoneComponent', () => {
  let component: CurriculumoneComponent;
  let fixture: ComponentFixture<CurriculumoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
