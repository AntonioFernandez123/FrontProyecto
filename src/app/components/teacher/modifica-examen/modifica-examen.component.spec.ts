import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaExamenComponent } from './modifica-examen.component';

describe('ModificaExamenComponent', () => {
  let component: ModificaExamenComponent;
  let fixture: ComponentFixture<ModificaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificaExamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
