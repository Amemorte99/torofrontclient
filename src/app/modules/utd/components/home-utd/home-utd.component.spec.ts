import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUtdComponent } from './home-utd.component';

describe('HomeUtdComponent', () => {
  let component: HomeUtdComponent;
  let fixture: ComponentFixture<HomeUtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUtdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
