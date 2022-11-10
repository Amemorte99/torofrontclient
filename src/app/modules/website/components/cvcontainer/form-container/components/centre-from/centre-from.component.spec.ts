import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreFromComponent } from './centre-from.component';

describe('CentreFromComponent', () => {
  let component: CentreFromComponent;
  let fixture: ComponentFixture<CentreFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
