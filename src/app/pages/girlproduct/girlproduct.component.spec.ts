import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlproductComponent } from './girlproduct.component';

describe('GirlproductComponent', () => {
  let component: GirlproductComponent;
  let fixture: ComponentFixture<GirlproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirlproductComponent]
    });
    fixture = TestBed.createComponent(GirlproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
