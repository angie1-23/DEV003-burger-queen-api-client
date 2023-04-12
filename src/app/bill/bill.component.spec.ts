import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillComponentx } from './bill.component';

describe('BillComponent', () => {
  let component: BillComponentx;
  let fixture: ComponentFixture<BillComponentx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillComponentx ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillComponentx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
