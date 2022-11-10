import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFromComponent } from './formation-from.component';

describe('FormationFromComponent', () => {
  let component: FormationFromComponent;
  let fixture: ComponentFixture<FormationFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
