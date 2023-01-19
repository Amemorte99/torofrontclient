import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeaComponent } from './uea.component';

describe('UeaComponent', () => {
  let component: UeaComponent;
  let fixture: ComponentFixture<UeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
