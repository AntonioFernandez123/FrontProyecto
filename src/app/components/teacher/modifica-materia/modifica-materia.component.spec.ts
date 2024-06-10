import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaMateriaComponent } from './modifica-materia.component';

describe('ModificaMateriaComponent', () => {
  let component: ModificaMateriaComponent;
  let fixture: ComponentFixture<ModificaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificaMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
