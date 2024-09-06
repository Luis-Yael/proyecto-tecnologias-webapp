import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosScreenComponent } from './registro-usuarios-screen.component';

describe('RegistroUsuariosScreenComponent', () => {
  let component: RegistroUsuariosScreenComponent;
  let fixture: ComponentFixture<RegistroUsuariosScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroUsuariosScreenComponent]
    });
    fixture = TestBed.createComponent(RegistroUsuariosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
