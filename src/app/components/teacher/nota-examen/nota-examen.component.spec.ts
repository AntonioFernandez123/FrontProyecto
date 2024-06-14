import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaExamenComponent } from './nota-examen.component';

describe('NotaExamenComponent', () => {
  let component: NotaExamenComponent;
  let fixture: ComponentFixture<NotaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotaExamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
