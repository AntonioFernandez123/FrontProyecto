import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { InsertaProfesorComponent } from './components/admin/inserta-profesor/inserta-profesor.component';
import { ActualizaProfesorComponent } from './components/admin/actualiza-profesor/actualiza-profesor.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  //ADMIN
  {path:'admin',component:AdminComponent},
  {path:'admin/insertaProfesor',component:InsertaProfesorComponent},
  {path:'admin/actualizaProfesor/:id',component:ActualizaProfesorComponent},

  //TEACHER
  {path:'teacher',component:TeacherComponent},

  //SUTDENT
  {path:'student',component:StudentComponent},

  //ERROR
  {path:'**',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
