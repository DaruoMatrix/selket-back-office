import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyManagerComponent } from './modify-manager.component';

describe('ModifyManagerComponent', () => {
  let component: ModifyManagerComponent;
  let fixture: ComponentFixture<ModifyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
