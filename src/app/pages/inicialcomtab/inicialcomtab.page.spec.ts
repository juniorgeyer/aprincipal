import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialcomtabPage } from './inicialcomtab.page';

describe('InicialcomtabPage', () => {
  let component: InicialcomtabPage;
  let fixture: ComponentFixture<InicialcomtabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialcomtabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialcomtabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
