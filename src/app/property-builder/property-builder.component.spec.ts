import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBuilderComponent } from './property-builder.component';

describe('PropertyBuilderComponent', () => {
  let component: PropertyBuilderComponent;
  let fixture: ComponentFixture<PropertyBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
