import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaProfesorComponent } from './inserta-profesor.component';

describe('InsertaProfesorComponent', () => {
  let component: InsertaProfesorComponent;
  let fixture: ComponentFixture<InsertaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertaProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
