import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudControllerComponent } from './crud-controller.component';

describe('CrudControllerComponent', () => {
  let component: CrudControllerComponent;
  let fixture: ComponentFixture<CrudControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
