import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetEmploiComponent } from './det-emploi.component';

describe('DetEmploiComponent', () => {
  let component: DetEmploiComponent;
  let fixture: ComponentFixture<DetEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
