import { Routes } from '@angular/router';
import {StudentList} from './components/student-list/student-list';
import {Dashboard} from './components/dashboard/dashboard';
import {StudentForm} from './components/student-form/student-form';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },

  {
    path: 'students',
    component : StudentList
  },

  {
    path: 'add-student',
    component : StudentForm
  }
];
