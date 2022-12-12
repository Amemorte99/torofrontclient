import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatCompteComponent } from './achat-compte.component';

describe('AchatCompteComponent', () => {
  let component: AchatCompteComponent;
  let fixture: ComponentFixture<AchatCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
