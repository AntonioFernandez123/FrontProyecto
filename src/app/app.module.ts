import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { InsertaProfesorComponent } from './components/admin/inserta-profesor/inserta-profesor.component';
import { ActualizaProfesorComponent } from './components/admin/actualiza-profesor/actualiza-profesor.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    InsertaProfesorComponent,
    ActualizaProfesorComponent,
    InsertaCursoComponent,
    InsertaMateriaComponent,
    VerMateriaComponent,
    ModificaMateriaComponent,
    InsertaAlumnosComponent,
    CrearAlumnosComponent,
    InsertaExamenComponent,
    VerExamenComponent,
    ModificaExamenComponent,
    NotaExamenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    CommonModule,

  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
