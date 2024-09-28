import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBuilderComponent } from './body-builder.component';

describe('BodyFieldComponent', () => {
  let component: BodyBuilderComponent;
  let fixture: ComponentFixture<BodyBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBuilderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BodyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
