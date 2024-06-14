import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Grade } from '../../../models/gradeDTO';
import { Subject } from '../../../models/subjectDTO';
import { SubjectResponse } from '../../../models/subjectResponseDTO';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-inserta-materia',
  templateUrl: './inserta-materia.component.html',
  styleUrl: './inserta-materia.component.css'
})
export class InsertaMateriaComponent {

  id: number = 0;

  constructor(private location: Location, private route: ActivatedRoute, private subjectService: SubjectService){
    const idParam = this.route.snapshot.paramMap.get('idCurso');
    this.id = idParam ? +idParam : 1
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(f: NgForm){
    const g = new Grade()
    g.idGrade = this.id

    const s = new SubjectResponse();
    s.name = f.value.nombre
    s.shortName = f.value.abreviacion
    s.hourPerWeek = f.value.horaSemana
    s.grade = g

    this.subjectService.createSubject(s).subscribe((data) => { console.log(data); this.goBack()})
  }

}
