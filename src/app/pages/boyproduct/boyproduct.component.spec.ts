import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyproductComponent } from './boyproduct.component';

describe('BoyproductComponent', () => {
  let component: BoyproductComponent;
  let fixture: ComponentFixture<BoyproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoyproductComponent]
    });
    fixture = TestBed.createComponent(BoyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
