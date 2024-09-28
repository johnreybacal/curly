import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFieldComponent } from './body-field.component';

describe('BodyFieldComponent', () => {
  let component: BodyFieldComponent;
  let fixture: ComponentFixture<BodyFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
