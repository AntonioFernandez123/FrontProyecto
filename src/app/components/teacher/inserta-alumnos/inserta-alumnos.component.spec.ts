import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaAlumnosComponent } from './inserta-alumnos.component';

describe('InsertaAlumnosComponent', () => {
  let component: InsertaAlumnosComponent;
  let fixture: ComponentFixture<InsertaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertaAlumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
