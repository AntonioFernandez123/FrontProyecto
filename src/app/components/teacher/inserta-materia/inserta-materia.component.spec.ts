import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaMateriaComponent } from './inserta-materia.component';

describe('InsertaMateriaComponent', () => {
  let component: InsertaMateriaComponent;
  let fixture: ComponentFixture<InsertaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertaMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
