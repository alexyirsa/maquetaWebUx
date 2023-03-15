import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titulo1Component } from './titulo1.component';

describe('Titulo1Component', () => {
  let component: Titulo1Component;
  let fixture: ComponentFixture<Titulo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Titulo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
