import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaExamenComponent } from './inserta-examen.component';

describe('InsertaExamenComponent', () => {
  let component: InsertaExamenComponent;
  let fixture: ComponentFixture<InsertaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertaExamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
