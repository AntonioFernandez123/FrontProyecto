import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { InsertaProfesorComponent } from './components/admin/inserta-profesor/inserta-profesor.component';
import { ActualizaProfesorComponent } from './components/admin/actualiza-profesor/actualiza-profesor.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { InsertaCursoComponent } from './components/teacher/inserta-curso/inserta-curso.component';
import { InsertaMateriaComponent } from './components/teacher/inserta-materia/inserta-materia.component';
import { VerMateriaComponent } from './components/teacher/ver-materia/ver-materia.component';
import { ModificaMateriaComponent } from './components/teacher/modifica-materia/modifica-materia.component';
import { InsertaAlumnosComponent } from './components/teacher/inserta-alumnos/inserta-alumnos.component';
import { CrearAlumnosComponent } from './components/teacher/crear-alumnos/crear-alumnos.component';
import { InsertaExamenComponent } from './components/teacher/inserta-examen/inserta-examen.component';
import { VerExamenComponent } from './components/teacher/ver-examen/ver-examen.component';
import { ModificaExamenComponent } from './components/teacher/modifica-examen/modifica-examen.component';
import { NotaExamenComponent } from './components/teacher/nota-examen/nota-examen.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  //ADMIN
  {path:'admin',component:AdminComponent},
  {path:'admin/insertaProfesor',component:InsertaProfesorComponent},
  {path:'admin/actualizaProfesor/:id',component:ActualizaProfesorComponent},

  //TEACHER
  {path:'teacher/:id',component:TeacherComponent},
  {path:'teacher/:id/insertaCurso',component:InsertaCursoComponent},
  {path:'teacher/:id/insertaMateria/:idCurso',component:InsertaMateriaComponent},
  {path:'teacher/:id/verMateria/:idMateria',component:VerMateriaComponent},
  {path:'teacher/:id/modificaMateria/:idCurso/:idMateria',component:ModificaMateriaComponent},
  {path:'teacher/:id/verMateria/:idMateria/insertaAlumnos',component:InsertaAlumnosComponent},
  {path:'teacher/:id/verMateria/:idMateria/insertaAlumnos/crearAlumnos',component:CrearAlumnosComponent},
  {path:'teacher/:id/verMateria/:idMateria/insertaExamenes',component:InsertaExamenComponent},
  {path:'teacher/:id/verMateria/:idMateria/verExamen/:idExamen',component:VerExamenComponent},
  {path:'teacher/:id/verMateria/:idMateria/modificaExamen/:idExamen',component:ModificaExamenComponent},
  {path:'teacher/:id/verMateria/:idMateria/verExamen/:idExamen/notaExamen/:idAlumno',component:NotaExamenComponent},

  //SUTDENT
  {path:'student/:idAlumno',component:StudentComponent},
  

  //ERROR
  {path:'**',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
