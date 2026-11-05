import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'SM-student-form',
  styleUrl: './student-form.css',
  templateUrl: './student-form.html',
})
export class StudentForm {

  studentName: string = '';
  email: string = '';
  contact: string = '';
  course: string = '';
  status: string = 'Active';
}

// interpolation, property binding, event binding ,
// two way data binding

