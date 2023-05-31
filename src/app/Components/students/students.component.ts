import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [],
})
export class StudentsComponent implements OnInit {
  constructor(private myService: StudentsService, private router: Router) {}
  Students: any;
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next: (data) => {
        this.Students = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
