import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUEAComponent } from './user-uea.component';

describe('UserUEAComponent', () => {
  let component: UserUEAComponent;
  let fixture: ComponentFixture<UserUEAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUEAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
