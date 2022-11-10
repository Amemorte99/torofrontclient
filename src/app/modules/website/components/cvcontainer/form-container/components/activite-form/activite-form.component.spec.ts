import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteFormComponent } from './activite-form.component';

describe('ActiviteFormComponent', () => {
  let component: ActiviteFormComponent;
  let fixture: ComponentFixture<ActiviteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiviteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
