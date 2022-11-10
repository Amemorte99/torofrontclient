import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitetentrepriseComponent } from './visitetentreprise.component';

describe('VisitetentrepriseComponent', () => {
  let component: VisitetentrepriseComponent;
  let fixture: ComponentFixture<VisitetentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitetentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitetentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
