import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionAlexaComponent } from './conexion-alexa.component';

describe('ConexionAlexaComponent', () => {
  let component: ConexionAlexaComponent;
  let fixture: ComponentFixture<ConexionAlexaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConexionAlexaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexionAlexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
