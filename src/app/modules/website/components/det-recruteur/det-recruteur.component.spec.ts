import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetRecruteurComponent } from './det-recruteur.component';

describe('DetRecruteurComponent', () => {
  let component: DetRecruteurComponent;
  let fixture: ComponentFixture<DetRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetRecruteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
