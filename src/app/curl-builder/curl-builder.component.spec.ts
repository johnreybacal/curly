import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurlBuilderComponent } from './curl-builder.component';

describe('CurlBuilderComponent', () => {
  let component: CurlBuilderComponent;
  let fixture: ComponentFixture<CurlBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurlBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurlBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
