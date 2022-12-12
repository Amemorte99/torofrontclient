import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetStagiaireComponent } from './det-stagiaire.component';

describe('DetStagiaireComponent', () => {
  let component: DetStagiaireComponent;
  let fixture: ComponentFixture<DetStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
