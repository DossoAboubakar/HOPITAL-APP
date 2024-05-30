import { Routes } from '@angular/router';
import { ConnexionFormComponent } from './components/login/connexion-form.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { routesGuardGuard } from './guards/routes-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/dashboard/views/user-list/user-list.component';
import { PrescriptionComponent } from './components/dashboard/views/prescription/prescription.component';
import { FeesComponent } from './components/dashboard/views/fees/fees.component';
import { ExamManagerComponent } from './components/dashboard/views/exam-manager/exam-manager.component';
import { DirectoryComponent } from './components/dashboard/views/directory/directory.component';
import { ConsultationComponent } from './components/dashboard/views/consultation/consultation.component';
import { UserListTableComponent } from './components/dashboard/views/user-list/user-list-table/user-list-table.component';
import { DirectoryTemplateComponent } from './components/dashboard/views/directory/directory-template/directory-template.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    //pathMatch :'full'
  },

  {
    path: 'login',
    component: ConnexionFormComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'userList',
    component: UserListComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'consultation',
    component: ConsultationComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'create/directory',
    component: DirectoryComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'exams/manager',
    component: ExamManagerComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'fees',
    component: FeesComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'prescription',
    component: PrescriptionComponent,
    //canActivate : [routesGuardGuard]
  },
  {
    path: 'table',
    component: UserListTableComponent,
    //canActivate : [routesGuardGuard]
  },

  {
    path: 'directory',
    component: DirectoryTemplateComponent,
    //canActivate : [routesGuardGuard]
  },

  {
    path: '**',
    component: Page404Component,
  },
];
