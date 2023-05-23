import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeitalProductComponent } from './deital-product.component';

describe('DeitalProductComponent', () => {
  let component: DeitalProductComponent;
  let fixture: ComponentFixture<DeitalProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeitalProductComponent]
    });
    fixture = TestBed.createComponent(DeitalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
