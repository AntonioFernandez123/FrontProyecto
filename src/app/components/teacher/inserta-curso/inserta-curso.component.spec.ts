import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaCursoComponent } from './inserta-curso.component';

describe('InsertaCursoComponent', () => {
  let component: InsertaCursoComponent;
  let fixture: ComponentFixture<InsertaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertaCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
