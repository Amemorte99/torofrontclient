import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListUEAComponent } from './menu-list-uea.component';

describe('MenuListUEAComponent', () => {
  let component: MenuListUEAComponent;
  let fixture: ComponentFixture<MenuListUEAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListUEAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuListUEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
