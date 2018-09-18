import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBankComponent } from './modify-bank.component';

describe('ModifyBankComponent', () => {
  let component: ModifyBankComponent;
  let fixture: ComponentFixture<ModifyBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
