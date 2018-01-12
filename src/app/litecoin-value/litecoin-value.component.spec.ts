import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitecoinValueComponent } from './litecoin-value.component';

describe('LitecoinValueComponent', () => {
  let component: LitecoinValueComponent;
  let fixture: ComponentFixture<LitecoinValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitecoinValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitecoinValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
