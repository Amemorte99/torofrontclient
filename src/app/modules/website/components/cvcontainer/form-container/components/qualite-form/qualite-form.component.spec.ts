import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualiteFormComponent } from './qualite-form.component';

describe('QualiteFormComponent', () => {
  let component: QualiteFormComponent;
  let fixture: ComponentFixture<QualiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualiteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
