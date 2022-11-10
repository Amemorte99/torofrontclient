import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtdComponent } from './utd.component';

describe('UtdComponent', () => {
  let component: UtdComponent;
  let fixture: ComponentFixture<UtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
