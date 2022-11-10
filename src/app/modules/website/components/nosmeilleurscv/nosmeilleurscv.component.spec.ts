import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosmeilleurscvComponent } from './nosmeilleurscv.component';

describe('NosmeilleurscvComponent', () => {
  let component: NosmeilleurscvComponent;
  let fixture: ComponentFixture<NosmeilleurscvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosmeilleurscvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosmeilleurscvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
