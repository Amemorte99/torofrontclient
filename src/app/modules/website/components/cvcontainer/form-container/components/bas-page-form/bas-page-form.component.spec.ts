import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasPageFormComponent } from './bas-page-form.component';

describe('BasPageFormComponent', () => {
  let component: BasPageFormComponent;
  let fixture: ComponentFixture<BasPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasPageFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
