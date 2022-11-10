import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoralComponent } from './moral.component';

describe('MoralComponent', () => {
  let component: MoralComponent;
  let fixture: ComponentFixture<MoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
