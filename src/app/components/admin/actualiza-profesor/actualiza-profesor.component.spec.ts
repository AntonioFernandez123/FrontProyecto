import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaProfesorComponent } from './actualiza-profesor.component';

describe('ActualizaProfesorComponent', () => {
  let component: ActualizaProfesorComponent;
  let fixture: ComponentFixture<ActualizaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizaProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
