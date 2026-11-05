import { Component } from '@angular/core';
import {Student} from '../../models/student';

@Component({
  imports: [],
  selector: 'SM-student-list',
  styleUrl: './student-list.css',
  templateUrl: './student-list.html',
})
export class StudentList {
  students: Student[] = [
    {
      id: 1,
      name: "Amal Perera",
      email: "amal.perera@gmail.com",
      contact: "0771234567",
      course: "Full Stack Development",
      status: "Active"
    },
    {
      id: 2,
      name: "Nimal Fernando",
      email: "nimal.fernando@gmail.com",
      contact: "0712345678",
      course: "Data Science",
      status: "Completed"
    },
    {
      id: 3,
      name: "Kavindi Silva",
      email: "kavindi.silva@gmail.com",
      contact: "0763456789",
      course: "Artificial Intelligence",
      status: "Active"
    },
    {
      id: 4,
      name: "Tharushi Perera",
      email: "tharushi.perera@gmail.com",
      contact: "0754567890",
      course: "Cloud Computing",
      status: "Completed"
    },
    {
      id: 5,
      name: "Kasun Jayawardena",
      email: "kasun.jayawardena@gmail.com",
      contact: "0785678901",
      course: "Full Stack Development",
      status: "Active"
    }
  ]
}
