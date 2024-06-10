import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from '../../../models/subjectDTO';
import { ActivatedRoute } from '@angular/router';
import { Grade } from '../../../models/gradeDTO';
import { SubjectResponse } from '../../../models/subjectResponseDTO';
import { SubjectService } from '../../../services/subject.service';
import { Student } from '../../../models/studentDTO';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-modifica-materia',
  templateUrl: './modifica-materia.component.html',
  styleUrl: './modifica-materia.component.css'
})
export class ModificaMateriaComponent {

  id:number = 0;
  idCurso: number = 0;
  students: Student[] = [];

  constructor(private location: Location, private route: ActivatedRoute, private subjectService: SubjectService,
    private studentService: StudentService
  ){
    const idMateria = this.route.snapshot.paramMap.get('idMateria');
    this.id = idMateria ? +idMateria : 1

    const idCurso = this.route.snapshot.paramMap.get('idCurso');
    this.idCurso = idCurso ? +idCurso : 1

    this.loadStudent()
  }

  goBack(): void {
    this.location.back();
  }

  loadStudent(){
    this.studentService.getAllStudentInSubject(this.id).subscribe((data) => this.students = data)
  }

  onSubmit(f: NgForm){

    const g: Grade = new Grade()
    g.idGrade = this.idCurso
    const s = new Subject();
    s.idSubject = this.id;
    s.name = f.value.nombre
    s.shortName = f.value.abreviacion
    s.hourPerWeek = f.value.horaSemana
    s.grade = g
    s.students = this.students

    this.subjectService.updateSubject(s).subscribe((data) => { console.log(data); this.goBack()})

  }
}
