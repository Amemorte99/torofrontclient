import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferneceFormComponent } from './refernece-form.component';

describe('ReferneceFormComponent', () => {
  let component: ReferneceFormComponent;
  let fixture: ComponentFixture<ReferneceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferneceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferneceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
