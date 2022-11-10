import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPiedModelComponent } from './btn-pied-model.component';

describe('BtnPiedModelComponent', () => {
  let component: BtnPiedModelComponent;
  let fixture: ComponentFixture<BtnPiedModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPiedModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPiedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
