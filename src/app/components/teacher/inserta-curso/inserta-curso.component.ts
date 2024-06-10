import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grade } from '../../../models/gradeDTO';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../models/teacherDTO';
import { GradeService } from '../../../services/grade.service';

@Component({
  selector: 'app-inserta-curso',
  templateUrl: './inserta-curso.component.html',
  styleUrl: './inserta-curso.component.css'
})
export class InsertaCursoComponent {

  id: number = 0;

  constructor(private location: Location, private route: ActivatedRoute, 
    private teacherService: TeacherService, private gradeService: GradeService){
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 1
    this.getTeacherById();
  }

  goBack(): void {
    this.location.back();
  }

  getTeacherById(){
    this.teacherService.getTeacherById(this.id).subscribe((data) => { console.log(data)})
  }

  onSubmit(f: NgForm){
    const t = new Teacher(this.id)

    const g = new Grade();
    g.name = f.value.nombre
    g.shortName = f.value.abreviacion
    g.teacher = t

    this.gradeService.createGrade(g).subscribe((data) => { console.log(data); this.goBack()})
  }

}
