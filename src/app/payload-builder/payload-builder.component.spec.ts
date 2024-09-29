import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadBuilderComponent } from './payload-builder.component';

describe('PayloadFieldComponent', () => {
  let component: PayloadBuilderComponent;
  let fixture: ComponentFixture<PayloadBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayloadBuilderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PayloadBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
